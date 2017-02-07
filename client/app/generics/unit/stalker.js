import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Stalker = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_stalker',
    characteristics: {
        attack: 3,
        health: 7,
        attackType: UNIT_TYPE_ATTACK.RANGE
    },
    handlers: {
        attack(enemy) {
            enemy.options.characteristics.health -= this.options.characteristics.attack;

            return enemy;
        }
    }
};
