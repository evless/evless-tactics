import { USER_ACTIONS } from '../../constants/user_actions.js';
import { USER_HANDLER_NAME, HERO_HANDLER_NAME } from '../../constants/handlers.js';

export default class UnitController {
    constructor($scope, $rootScope) {
        this.$rootScope = $rootScope;
        this.GAME = $rootScope.GAME;
        this.options = $scope.options;
        this.disabled = true;
        this.enemyAction = null;

        this.$rootScope = $rootScope;
        $rootScope.$on(USER_HANDLER_NAME, this.userActionHandler.bind(this));
        $rootScope.$on(HERO_HANDLER_NAME, this.heroActionHandler.bind(this));
    }

    click() {
        if (this.disabled) {
            return false;
        }

        if (this.enemyAction && 'attack' === this.enemyAction.type) {
            this.options.health -= this.enemyAction.hero.attack;
            this.$rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.CANCEL);

            return false;
        }

        this.$rootScope.$broadcast(HERO_HANDLER_NAME, {
            type: 'attack',
            hero: this.options
        });
    }

    disabled() {

    }

    checkGamerName() {
        return this.GAME.gamerName === this.options.gamerName;
    }

    checkPhaseAndLocation() {
        return this.GAME.phase === this.options.location;
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
            this.enemyHero = null;
        }
    }
}
