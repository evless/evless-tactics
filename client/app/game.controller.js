import { UNIT_TYPES } from './constants/unitTypes.js';
import { PHASES } from './constants/phases.js';
import { USER_ACTIONS } from './constants/userActions.js';
import { USER_HANDLER_NAME } from './constants/handlers.js';

export default class GameController {
    constructor($scope, $rootScope) {
        $rootScope.GAME = {};
        this.gamerName = $rootScope.GAME.gamerName = 'first';
        this.enemyName = $rootScope.GAME.enemyName = 'second';
        this.phase = $rootScope.GAME.phase = PHASES.VANGUARD; // Номер фазы
        this.currentActions = $rootScope.GAME.currentActions = USER_ACTIONS.CANCEL; // Текущее действие
        $rootScope.$on(USER_HANDLER_NAME, (event, data) => {
            if (data === USER_ACTIONS.END) {
                $rootScope.$broadcast(USER_HANDLER_NAME, USER_ACTIONS.CANCEL);

                return;
            }

            $rootScope.GAME.currentActions = data;
        });

        let tmp = {
            type: UNIT_TYPES.CLEAR,
            gamerName: 'first',
            health: 10,
            attack: 1,
            classes: 'unit_vampir'
        };

        this.army = {
            first: [
                [{
                    ...tmp,
                    location: PHASES.VANGUARD
                },
                {
                    ...tmp,
                    location: PHASES.VANGUARD
                },
                {
                    ...tmp,
                    location: PHASES.VANGUARD
                }],
                [{
                    ...tmp,
                    location: PHASES.WING
                },
                {
                    ...tmp,
                    location: PHASES.WING,
                    classes: 'unit_luk'
                },
                {
                    ...tmp,
                    location: PHASES.WING
                }],
                [{
                    ...tmp,
                    location: PHASES.REAR
                },
                {
                    ...tmp,
                    location: PHASES.REAR
                },
                {
                    ...tmp,
                    location: PHASES.REAR
                }]
            ],
            second: [
                [{
                    ...tmp,
                    location: PHASES.REAR,
                    gamerName: 'second'
                },
                {
                    ...tmp,
                    location: PHASES.REAR,
                    gamerName: 'second'
                },
                {
                    ...tmp,
                    location: PHASES.REAR,
                    gamerName: 'second'
                }],
                [{
                    ...tmp,
                    location: PHASES.WING,
                    gamerName: 'second'
                },
                {
                    ...tmp,
                    location: PHASES.WING,
                    gamerName: 'second',
                    classes: 'unit_sagas'
                },
                {
                    ...tmp,
                    location: PHASES.WING,
                    gamerName: 'second'
                }],
                [{
                    ...tmp,
                    location: PHASES.VANGUARD,
                    gamerName: 'second'
                },
                {
                    ...tmp,
                    location: PHASES.VANGUARD,
                    gamerName: 'second'
                },
                {
                    ...tmp,
                    location: PHASES.VANGUARD,
                    gamerName: 'second'
                }]
            ]
        };
    }
}
