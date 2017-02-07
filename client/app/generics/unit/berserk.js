import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Berserk = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_berserk',
    characteristics: {
        attack: 3,
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
