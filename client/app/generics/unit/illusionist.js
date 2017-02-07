import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Illusionist = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_illusionist',
    characteristics: {
        attack: 4,
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
