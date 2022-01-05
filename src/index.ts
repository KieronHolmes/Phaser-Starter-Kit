import * as Phaser from 'phaser';
import Scenes from './Scenes';

const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Phaser Starter Kit',
    type: Phaser.AUTO,
    backgroundColor: '#000000',
    parent: 'phaser-game',
    scale: {
        height: 700,
        width: 700,
    },
    scene: Scenes,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
};

export const game = new Phaser.Game(gameConfig);

window.addEventListener('resize', () => {
    game.scale.refresh();
});