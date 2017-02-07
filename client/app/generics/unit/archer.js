import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Archer = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_archer',
    characteristics: {
        attack: 5,
        health: 4,
        attackType: UNIT_TYPE_ATTACK.RANGE
    },
    handlers: {
        attack(enemy) {
            enemy.options.characteristics.health -= this.options.characteristics.attack;

            return enemy;
        }
    }
};
