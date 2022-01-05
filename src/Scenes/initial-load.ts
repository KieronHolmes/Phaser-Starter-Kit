import TweenHelper from '../Helpers/TweenHelper'

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Initial',
};

export class InitialLoad extends Phaser.Scene {
    private loadingText: Phaser.GameObjects.Text;
    constructor() {
        super(sceneConfig);
    }

    public preload() {
        this.load.image('phaser-logo','../Assets/images/phaser-logo.png');
        this.load.on('complete', () => {
            console.log("Loading Complete...")
            this.loadingText = this.add.text(350, 650, 'Loading Complete...').setFontSize(24).setOrigin(0.5);
            TweenHelper.flashElement(this,this.loadingText);
        });
    }

    public create() {
        this.add.image(350, 350, 'phaser-logo');
    }
}