import { UNIT_TYPE_ATTACK, UNIT_TYPES } from '../../constants/unit.js';

export const DragonMage = {
    type: UNIT_TYPES.UNIT,
    classes: 'unit_dragon-mage',
    characteristics: {
        attack: 6,
        health: 3,
        attackType: UNIT_TYPE_ATTACK.FIGHT
    },
    handlers: {
        attack(enemy) {
            enemy.options.characteristics.health -= this.options.characteristics.attack;

            return enemy;
        }
    }
};
