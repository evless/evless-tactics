import { USER_ACTIONS } from '../../constants/userActions.js';
import { USER_HANDLER_NAME, HERO_HANDLER_NAME } from '../../constants/handlers.js';
import { Unit } from './unit.class.js';
import { UNIT_ACTIONS } from '../../constants/unitActions.js';

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
            this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.END);

            return false;
        }
    }

    heroActionHandler(event, data) {
        if (data.hero.options.location === this.options.location && !this.checkGamerName()) {
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
