class cenaPause extends Phaser.Scene {
    constructor() {
        super({ key: 'cenaPause' });
    }

    preload() {
        this.load.image('telaPause', 'src/assets/tela_pause.png');
        this.load.image('voltar', 'src/assets/botao_voltarprojogo.png');
        this.load.image('controles', 'src/assets/botao_controles.png');
        this.load.image('FAQ', 'src/assets/botao_faq.png');
    }

    create() {
        //centraliza a tela
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;
        this.add.image(centerX, centerY, 'telaPause'); // Define imagem de fundo opções

        // Botão para voltar ao menu
        let botaoVoltar = this.add.image(710, 220, 'voltar').setScale(1.2)
            .setInteractive()

            botaoVoltar.on('pointerdown', () => {
            this.scene.start('cena1fase1'); // Voltar para o menu
        });

        botaoVoltar.once('pointerover', () => botaoVoltar.setScale(1.3)); // Aumenta no hover
        botaoVoltar.once('pointerout', () => botaoVoltar.setScale(1.2)); // Volta ao tamanho original

        // Botão para voltar ao menu
        let botaoControles = this.add.image(710, 350, 'controles').setScale(1.2)
            .setInteractive()

            botaoControles.once('pointerdown', () => {
            this.scene.start('cenaControles'); // Voltar para o menu
        });

        botaoControles.on('pointerover', () => botaoControles.setScale(1.3)); // Aumenta no hover
        botaoControles.on('pointerout', () => botaoControles.setScale(1.2)); // Volta ao tamanho original

        // Botão para voltar ao menu
        let botaoFAQ = this.add.image(710, 470, 'FAQ').setScale(0.65)
            .setInteractive()

            botaoFAQ.once('pointerdown', () => {
            this.scene.start('cenaFAQ'); // Voltar para o menu
        });

        botaoFAQ.on('pointerover', () => botaoFAQ.setScale(0.75)); // Aumenta no hover
        botaoFAQ.on('pointerout', () => botaoFAQ.setScale(0.65)); // Volta ao tamanho original
    }
}