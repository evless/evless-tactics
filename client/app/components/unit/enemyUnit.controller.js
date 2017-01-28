import { USER_ACTIONS } from '../../constants/userActions.js';
import { USER_HANDLER_NAME, HERO_HANDLER_NAME } from '../../constants/handlers.js';
import { Unit } from '../../generics/unit.js';

export default class EnemyUnitController extends Unit {
    constructor($scope, $rootScope) {
        super($scope, $rootScope);
        this.enemyAction = null;
    }

    click() {
        if (this.disabled) {
            return false;
        }

        if (this.enemyAction && 'attack' === this.enemyAction.type) {
            this.options.health -= this.enemyAction.hero.attack;
            this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.END);
            
            return false;
        }

        this.$rootScope.$broadcast(HERO_HANDLER_NAME, {
            type: 'attack',
            hero: this.options
        });
    }

    heroActionHandler(event, data) {
        if (data.hero.location === this.options.location && !this.checkGamerName()) {
            this.disabled = false;
            this.enemyAction = data;

            return;
        }

        this.disabled = true;
    }

    userActionHandler(event, data) {
        if (data === USER_ACTIONS.ATTACK && this.checkGamerName() && this.checkPhaseAndLocation()) {
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
