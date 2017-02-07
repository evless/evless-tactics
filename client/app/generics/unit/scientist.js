import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Scientist = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_scientist',
    characteristics: {
        attack: 2,
        health: 5,
        attackType: UNIT_TYPE_ATTACK.FIGHT
    },
    handlers: {
        attack(enemy) {
            enemy.options.characteristics.health -= this.options.characteristics.attack;

            return enemy;
        }
    }
};
