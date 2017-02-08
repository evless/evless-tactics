import { USER_ACTIONS } from '../../constants/userActions.js';
import { CARD_ACTIONS } from '../../constants/card.js';
import { USER_HANDLER_NAME, HERO_HANDLER_NAME, CARD_HANDLER_NAME } from '../../constants/handlers.js';
import { UNIT_ACTIONS, UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';
import { PHASES } from '../../constants/phases.js';

export default class CardController {
    constructor($scope, $rootScope) {
        this.$rootScope = $rootScope;
        this.GAME = $rootScope.GAME;
        this.options = $scope.options;
        this.disabled = true;
        this.lastUserAction = null;

        $rootScope.$on(USER_HANDLER_NAME, this.userActionHandler.bind(this));
        $rootScope.$on(CARD_HANDLER_NAME, this.cardActionHandler.bind(this));
    }

    click() {
        if (this.disabled) {
            return false;
        }

        if (this.lastUserAction) {
            switch (this.lastUserAction) {
                case USER_ACTIONS.RECRUIT:
                    this.$rootScope.$broadcast(CARD_HANDLER_NAME, {
                        type: CARD_ACTIONS.RECRUIT,
                        card: this
                    });
                    break;
                default:
                    this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.CANCEL);
            }
        }
    }

    callbackRecruit() {
        this.$rootScope.removeCard(this.$rootScope.GAME.gamerName, this.options);
    }

    userActionHandler(event, data) {
        this.lastUserAction = data;

        if (data === USER_ACTIONS.RECRUIT) {
            this.disabled = false;
        }

        if (data === USER_ACTIONS.CANCEL) {
            this.disabled = true;
        }
    }

    cardActionHandler(event, data) {
        if (angular.equals(data.card, this)) {
            this.active = true;

            return;
        }

        this.active = false;
    }
}
