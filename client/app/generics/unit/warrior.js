import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Warrior = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_warrior',
    characteristics: {
        attack: 4,
        health: 8,
        attackType: UNIT_TYPE_ATTACK.FIGHT
    },
    handlers: {
        attack(enemy) {
            enemy.options.characteristics.health -= this.options.characteristics.attack;

            return enemy;
        }
    }
};
