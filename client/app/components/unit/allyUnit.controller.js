import { USER_ACTIONS } from '../../constants/userActions.js';
import { USER_HANDLER_NAME, HERO_HANDLER_NAME } from '../../constants/handlers.js';
import { Unit } from './unit.class.js';
import { UNIT_ACTIONS, UNIT_TYPES } from '../../constants/unit.js';

export default class AllyUnitController extends Unit {
    constructor($scope, $rootScope) {
        super($scope, $rootScope);
        this.lastHeroAction = null;
        this.lastUserAction = null;
    }

    click() {
        if (this.disabled) {
            return false;
        }

        if (this.lastHeroAction) {
            switch (this.lastHeroAction.type) {
                case UNIT_ACTIONS.SHIFT:
                    this.swipeCard(this.lastHeroAction.hero.options);
                    this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.END);
                    break;
                default:
                    this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.CANCEL);
            }
        }

        if (this.lastUserAction) {
            switch (this.lastUserAction) {
                case USER_ACTIONS.ATTACK:
                    this.$rootScope.$broadcast(HERO_HANDLER_NAME, {
                        type: UNIT_ACTIONS.ATTACK,
                        hero: this
                    });
                    break;
                case USER_ACTIONS.CLEANING:
                    this.options = angular.copy({
                        ...this.options,
                        type: UNIT_TYPES.CLEAR,
                        classes: 'unit_clear_first'
                    });
                    this.disabled = true;
                    this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.END);
                    break;
                case USER_ACTIONS.SHIFT:
                    this.$rootScope.$broadcast(HERO_HANDLER_NAME, {
                        type: UNIT_ACTIONS.SHIFT,
                        hero: this
                    });
                    break;
                default:
                    this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.CANCEL);
            }
        }
    }

    attack(enemy) {
        return this.options.handlers.attack.call(this, enemy);
    }

    heroActionHandler(event, data) {

        if (data.type === UNIT_ACTIONS.SHIFT && this.checkClearCard()) {
            this.lastHeroAction = data;
            this.disabled = false;

            return;
        }

        this.disabled = true;
    }

    userActionHandler(event, data) {
        this.lastUserAction = data;

        if (data === USER_ACTIONS.SHIFT && !this.checkClearCard() && !this.checkDeath()) {
            this.disabled = false;

            return;
        }

        if (data === USER_ACTIONS.CLEANING && this.checkDeath()) {
            this.disabled = false;

            return;
        }

        if (data === USER_ACTIONS.ATTACK
            && this.checkPhaseAndLocation()
            && !this.checkClearCard()
            && !this.checkDeath()) {
            this.disabled = false;

            return;
        }

        if (data === USER_ACTIONS.CANCEL) {
            this.disabled = true;
            this.allyAction = null;
        }
    }
}
