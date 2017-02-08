import angular from 'angular';
import CardController from './card.controller.js';

import './card.scss';
import '../unit/unit.background.scss';

export default function Card() {
    return {
        template: require('./card.html'),
        controllerAs: 'card',
        transclude: true,
        replace: true,
        scope: {
            options: '='
        },
        controller: CardController
    };
};
