class cenaControles extends Phaser.Scene {
    constructor() {
        super({ key: 'cenaControles' });
    }

    preload() {
        this.load.image('telaControles', 'src/assets/tela_controles.png');
        this.load.image('voltar', 'src/assets/botao_voltar.png');
    }

    create() {
        //centraliza a tela
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;
        this.add.image(centerX, centerY, 'telaControles'); // Define imagem de fundo opções

        // Botão para voltar ao menu
        let botaoVoltar = this.add.image(350, 170, 'voltar').setScale(0.25)
            .setInteractive()

            botaoVoltar.once('pointerdown', () => {
            this.scene.start('menu'); // Voltar para o menu
        });

        botaoVoltar.on('pointerover', () => botaoVoltar.setScale(0.32)); // Aumenta no hover
        botaoVoltar.on('pointerout', () => botaoVoltar.setScale(0.25)); // Volta ao tamanho original
    }
}