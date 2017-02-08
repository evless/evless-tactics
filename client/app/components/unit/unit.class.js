import angular from 'angular';
import { UNIT_TYPES } from '../../constants/unit.js';
import { USER_HANDLER_NAME, HERO_HANDLER_NAME, CARD_HANDLER_NAME } from '../../constants/handlers.js';

export class Unit {
    constructor($scope, $rootScope) {
        this.$rootScope = $rootScope;
        this.GAME = $rootScope.GAME;
        this.options = $scope.options;
        this.disabled = true;

        $rootScope.$on(USER_HANDLER_NAME, this.userActionHandler.bind(this));
        $rootScope.$on(HERO_HANDLER_NAME, this.heroActionHandler.bind(this));
        $rootScope.$on(CARD_HANDLER_NAME, this.cardActionHandler.bind(this));
    }

    userActionHandler() {

    }

    heroActionHandler() {

    }

    cardActionHandler() {

    }

    checkDeath() {
        return this.options.death;
    }

    checkGamerName() {
        return this.GAME.gamerName === this.options.gamerName;
    }

    checkPhaseAndLocation() {
        return this.GAME.phase === this.options.location.phase;
    }

    checkClearTypeCard() {
        return this.options.type === UNIT_TYPES.CLEAR;
    }

    checkKingTypeCard() {
        return this.options.type === UNIT_TYPES.KING;
    }

    /**
     * Свайп между текущей картой и выбранной заранее
     * @param {Object} newContext - Объект с опциями перемещаемой карты, которую выбрали заранее
     */
    swipeCard(newContext) {
        let army = this.$rootScope.GAME.army[this.options.gamerName];
        let rowOldContext = angular.copy(this.options.location.row);
        let columnOldContext = angular.copy(this.options.location.column);

        let rowNewContext = angular.copy(newContext.location.row);
        let columnNewContext = angular.copy(newContext.location.column);

        let copyOldContext = angular.copy({
            ...this.options,
            location: newContext.location
        });

        let copyNewContext = angular.copy({
            ...newContext,
            location: this.options.location
        });

        army[rowOldContext][columnOldContext] = angular.copy(copyNewContext);
        army[rowNewContext][columnNewContext] = angular.copy(copyOldContext);
    }

    recruitCard(cardContext) {
        let newContext = cardContext.options;
        let army = this.$rootScope.GAME.army[this.options.gamerName];
        let rowOldContext = angular.copy(this.options.location.row);
        let columnOldContext = angular.copy(this.options.location.column);

        let copyNewContext = angular.copy({
            ...newContext,
            location: this.options.location
        });

        army[rowOldContext][columnOldContext] = angular.copy(copyNewContext);
        cardContext.callbackRecruit();
    }
}
