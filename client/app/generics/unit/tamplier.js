import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Tamplier = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_tamplier',
    characteristics: {
        attack: 1,
        health: 6,
        attackType: UNIT_TYPE_ATTACK.FIGHT
    },
    handlers: {
        attack(enemy) {
            enemy.options.characteristics.health -= this.options.characteristics.attack;

            return enemy;
        }
    }
};
