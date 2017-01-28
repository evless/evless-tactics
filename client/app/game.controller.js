import { UNIT_TYPES } from './constants/unit_types.js';
import { PHASES } from './constants/phases.js';
import { USER_ACTIONS } from './constants/user_actions.js';
import { USER_HANDLER_NAME } from './constants/handlers.js';

export default class GameController {
    constructor($scope, $rootScope) {
        $rootScope.GAME = {};
        this.gamerName = $rootScope.GAME.gamerName = 'first';
        this.enemyName = $rootScope.GAME.enemyName = 'second';
        this.phase = $rootScope.GAME.phase = PHASES.VANGUARD; // Номер фазы
        this.currentActions = $rootScope.GAME.currentActions = USER_ACTIONS.CANCEL; // Текущее действие
        $rootScope.$on(USER_HANDLER_NAME, (event, data) => $rootScope.GAME.currentActions = data);
        this.army = {
            first: [
                [{
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.VANGUARD,
                    health: 10,
                    attack: 1
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.VANGUARD,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.VANGUARD,
                    health: 10,
                    attack: 3
                }],
                [{
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.WING,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.WING,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.WING,
                    health: 10,
                    attack: 2
                }],
                [{
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.REAR,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.REAR,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'first',
                    location: PHASES.REAR,
                    health: 10,
                    attack: 2
                }]
            ],
            second: [
                [{
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.REAR,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.REAR,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.REAR,
                    health: 10,
                    attack: 2
                }],
                [{
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.WING,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.WING,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.WING,
                    health: 10,
                    attack: 2
                }],
                [{
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.VANGUARD,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.VANGUARD,
                    health: 10,
                    attack: 2
                },
                {
                    type: UNIT_TYPES.CLEAR,
                    gamerName: 'second',
                    location: PHASES.VANGUARD,
                    health: 10,
                    attack: 2
                }]
            ]
        };
    }
}
