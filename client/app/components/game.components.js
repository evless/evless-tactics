// Library
import angular from 'angular';

// App
import { EnemyUnit, AllyUnit } from './unit/unit.js';
import Actions from './actions/actions.js';

let componentsModule = angular.module('game.components', []);
componentsModule.directive('enemyUnit', EnemyUnit);
componentsModule.directive('allyUnit', AllyUnit);
componentsModule.directive('actions', Actions);

export default componentsModule.name;
