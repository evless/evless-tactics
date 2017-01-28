// Library
import angular from 'angular';
import uirouter from 'angular-ui-router';

// App
import routerConfig from './game.router.config.js';
import GameController from './game.controller.js';
import gameComponents from './components/game.components.js';

// Styles
import '../public/scss/index.scss';

angular
    .module('game', [uirouter, gameComponents])
    .config(routerConfig)
    .controller('gameController', GameController);
