import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const Talisman = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_talisman',
    characteristics: {
        attack: 1,
        health: 4,
        attackType: UNIT_TYPE_ATTACK.FIGHT
    },
    handlers: {
        attack(enemy) {
            enemy.options.characteristics.health -= this.options.characteristics.attack;

            return enemy;
        }
    }
};
