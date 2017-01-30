import { USER_HANDLER_NAME, HERO_HANDLER_NAME } from '../../constants/handlers.js';

export class Unit {
    constructor($scope, $rootScope) {
        this.$rootScope = $rootScope;
        this.GAME = $rootScope.GAME;
        this.options = $scope.options;
        this.disabled = true;

        $rootScope.$on(USER_HANDLER_NAME, this.userActionHandler.bind(this));
        $rootScope.$on(HERO_HANDLER_NAME, this.heroActionHandler.bind(this));
    }

    checkGamerName() {
        return this.GAME.gamerName === this.options.gamerName;
    }

    checkPhaseAndLocation() {
        return this.GAME.phase === this.options.location;
    }
}
