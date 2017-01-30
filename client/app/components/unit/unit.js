import angular from 'angular';
import EnemyUnitController from './enemyUnit.controller.js';
import AllyUnitController from './allyUnit.controller.js';

import './unit.scss';

let options = {
    template: require('./unit.html'),
    controllerAs: 'unit',
    transclude: true,
    replace: true,
    scope: {
        options: '='
    }
};

export function EnemyUnit() {
    return {
        ...options,
        controller: EnemyUnitController
    };
};

export function AllyUnit() {
    return {
        ...options,
        controller: AllyUnitController
    };
};
