import { USER_ACTIONS } from '../../constants/userActions.js';
import { USER_HANDLER_NAME, HERO_HANDLER_NAME } from '../../constants/handlers.js';
import { Unit } from './unit.class.js';
import { UNIT_ACTIONS, UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';
import { PHASES } from '../../constants/phases.js';

export default class EnemyUnitController extends Unit {
    constructor($scope, $rootScope) {
        super($scope, $rootScope);
        this.enemyAction = null;
    }

    click() {
        if (this.disabled) {
            return false;
        }

        if (this.enemyAction && UNIT_ACTIONS.ATTACK === this.enemyAction.type) {
            this.enemyAction.hero.attack(this);
            if (0 > this.options.characteristics.health) {
                this.options.death = 1;
            }
            this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.END);

            return false;
        }
    }

    checkClearPreUnit() {
        let position = this.options.position;
        let army = this.$rootScope.GAME.army[this.options.gamerName];
        let row;

        switch (this.options.location) {
            case PHASES.VANGUARD:
                row = 0;
                break;
            case PHASES.WING:
                row = 1;
                break;
            case PHASES.REAR:
                row = 2;
                break;
            default:
                row = 0;
        }

        // Если он стоим первым
        if (0 === row) {
            return true;
        }

        return army[row - 1][position].type === UNIT_TYPES.CLEAR || army[row - 1][position].death;
    }

    heroActionHandler(event, data) {
        if (UNIT_ACTIONS.ATTACK === data.type && !this.checkDeath()) {
            if (UNIT_TYPE_ATTACK.FIGHT === data.hero.options.characteristics.attackType) {
                if (this.checkClearPreUnit() && !this.checkGamerName() && !this.checkClearCard()) {
                    this.disabled = false;
                    this.enemyAction = data;

                    return;
                }
            }

            if (UNIT_TYPE_ATTACK.RANGE === data.hero.options.characteristics.attackType) {
                if (!this.checkGamerName() && !this.checkClearCard()) {
                    this.disabled = false;
                    this.enemyAction = data;

                    return;
                }
            }
        }

        this.disabled = true;
    }

    userActionHandler(event, data) {
        if (data === USER_ACTIONS.ATTACK
            && this.checkGamerName()
            && this.checkPhaseAndLocation()) {
            this.disabled = false;

            return;
        }

        if (data === USER_ACTIONS.CANCEL) {
            this.disabled = true;
            this.enemyAction = null;

            return;
        }
    }
}
