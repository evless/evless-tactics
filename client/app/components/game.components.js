// Library
import angular from 'angular';

// App
import Unit from './unit/unit.js';
import Actions from './actions/actions.js';

let componentsModule = angular.module('game.components', []);
componentsModule.directive('unit', Unit);
componentsModule.directive('actions', Actions);

export default componentsModule.name;
