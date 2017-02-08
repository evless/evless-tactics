import angular from 'angular';
import ActionsController from './actions.controller.js';

import './actions.scss';

export default function Actions() {
    return {
        template: require('./actions.html'),
        controller: ActionsController,
        controllerAs: 'actions',
        transclude: true
    };
};
