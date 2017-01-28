import { USER_ACTIONS } from '../../constants/user_actions.js';
import { USER_HANDLER_NAME } from '../../constants/handlers.js';

export default class UnitController {
    constructor($scope, $rootScope) {
        this.$rootScope = $rootScope;
        this.GAME = $rootScope.GAME;
        this.list = [
            {
                title: 'Найм',
                name: USER_ACTIONS.RECRUIT
            },
            {
                title: 'Атака',
                name: USER_ACTIONS.ATTACK
            },
            {
                title: 'Приказ',
                name: USER_ACTIONS.ORDER
            },
            {
                title: 'Очистка',
                name: USER_ACTIONS.CLEANING
            },
            {
                title: 'Взять карту',
                name: USER_ACTIONS.CARD
            },
            {
                title: 'Перестановка',
                name: USER_ACTIONS.SHIFT
            }
        ];
    }

    click(item) {
        this.$rootScope.$broadcast(USER_HANDLER_NAME, item.name);
    }

    disabled(item) {
        if (USER_ACTIONS.CANCEL === this.GAME.currentActions) {
            return false;
        }

        return true;
    }

    active(item) {
        return this.GAME.currentActions === item.name;
    }

    cancel() {
        this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.CANCEL);
    }
}
