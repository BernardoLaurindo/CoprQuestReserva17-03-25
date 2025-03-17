class welcome extends Phaser.Scene {
    constructor() {
        super({ key: 'welcome' });
    }

    preload() {
        this.load.image('bg', 'src/assets/telaInicio.png'); // Carrega a imagem da tela inicial
        this.load.image('gameName', 'src/assets/logo.png')
        this.load.audio('ost01', 'src/assets/soundMenu.mp3'); // Carrega a música de introdução
    }

    create() {
        //centraliza a tela
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;

        // Faz a cena aparecer suavemente 
        this.cameras.main.fadeIn(800);

        // Fundo ajustado corretamente ao tamanho da tela
        let bg = this.add.image(centerX, centerY, 'bg');
        bg.displayWidth = this.cameras.main.width;
        bg.displayHeight = this.cameras.main.height;

        // Nome do jogo ajustado para ficar mais centralizado
        this.add.image(centerX, centerY - 50, 'gameName').setScale(0.2);

        // Texto piscante "Press ENTER to Start"
        let startText = this.add.text(centerX, centerY + 120, "Pressione ENTER para começar", {
            fontSize: '40px',  // Maior e mais visível
            fill: '#ffffff',
            fontFamily: 'Arial',
            align: 'center'
        }).setOrigin(0.5);  // Centraliza corretamente

        // Animação para o texto piscar continuamente
        this.tweens.add({
            targets: startText,
            alpha: 0, // O texto desaparece
            duration: 1500, // Tempo para desaparecer
            yoyo: true, // Volta ao estado original (pisca)
            repeat: -1 // Loop infinito
        });

        // Fade-Out e troca de cena ao pressionar ENTER
        this.input.keyboard.once('keydown-ENTER', () => {
            this.cameras.main.fadeOut(1000); // Faz o fade-out
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start('menu'); // Muda de cena APÓS o fade
            });
        });
        //toca a música de introdução
        let music = this.sound.add('ost01');
        music.play({ loop: true });
    }
}