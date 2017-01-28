import angular from 'angular';
import UnitController from './unit.controller.js';

import './unit.scss';

function Unit() {
    return {
        template: require('./unit.html'),
        controller: UnitController,
        controllerAs: 'unit',
        transclude: true,
        scope: {
            options: '='
        }
    };
};

export default Unit;
