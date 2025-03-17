class menu extends Phaser.Scene {
    constructor() {
        super({ key: 'menu' });
    }

    preload() {
        // Carregar imagem do botão F&Q
        this.load.image('botaoFAQ', 'src/assets/botaoFAQ.png');
        //carrega a imagem do botao de Jogar
        this.load.image('botaoJogar', 'src/assets/botaoJogar.png');
        // Carrega o botao de Controles
        this.load.image('botaoControles', 'src/assets/botaoControles.png');
        // Carrega a imagem de fundo inicial
        this.load.image('FundoTelaInicial', 'src/assets/telaMenu.png');
    }

    create() {
        //centraliza a tela
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;

        // Faz a cena aparecer suavemente
        this.cameras.main.fadeIn(1000);

        // Fundo ajustado corretamente ao tamanho da tela
        let bg = this.add.image(centerX, centerY, 'FundoTelaInicial');
        bg.displayWidth = this.cameras.main.width;
        bg.displayHeight = this.cameras.main.height;

        // Ajusta os botões
        let objetoJogar = this.add.image(centerX - 65, centerY - 73, 'botaoJogar').setInteractive();
        let objetoControle = this.add.image(centerX - 61, centerY, 'botaoControles').setInteractive();
        let objetoFAQ = this.add.image(centerX - 61, centerY + 83, 'botaoFAQ').setInteractive();

        // Ajuste de escala dos botões para melhor proporção
        objetoJogar.setScale(0.08);
        objetoControle.setScale(0.08);
        objetoFAQ.setScale(0.08);

        // Função para fade-out e troca de cena
        const transitionToScene = (sceneKey) => {
            this.cameras.main.fadeOut(1000); // Inicia o fade-out

            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start(sceneKey); // Só troca a cena após o fade-out
            });
        };

        // Aplicando o fade-out corretamente para cada botão
        objetoJogar.once('pointerdown', () => transitionToScene('cenaTutorial'));
        objetoControle.once('pointerdown', () => transitionToScene('cenaControles'));
        objetoFAQ.once('pointerdown', () => transitionToScene('cenaFAQ'));

        // Efeito de hover para os botões
        const addHoverEffect = (button) => {
            button.on('pointerover', () => button.setScale(0.085));
            button.on('pointerout', () => button.setScale(0.08));
        };

        addHoverEffect(objetoJogar);
        addHoverEffect(objetoControle);
        addHoverEffect(objetoFAQ);
    }
}