class cena1fase1 extends Phaser.Scene {
    constructor() {
        super({ key: 'cena1fase1' });
    }

    preload() {
        this.load.image('bghall', 'src/assets/cena1fase1.png');
        this.load.image('catraca', 'src/assets/catracaBaixo.png');
        this.load.spritesheet('dafiniImagem', 'src/assets/npcDafini.png', {frameWidth: 138, frameHeight: 246}); 
        this.load.image('celularImagem', 'src/assets/celular.png');
        this.load.spritesheet('taskImagem', 'src/assets/sinalTask.png', { frameWidth: 204, frameHeight: 204 });
        this.load.spritesheet('breath', 'src/assets/breathSheet.png', { frameWidth: 250, frameHeight: 296 });
        this.load.spritesheet('run', 'src/assets/runSheet.png', { frameWidth: 250, frameHeight: 296 });
        this.load.audio('footstep', 'src/assets/soundPassos.mp3');
        this.load.image('caixaTextoImagem', 'src/assets/caixaTexto.png');
        this.load.image('teclaEImagem', 'src/assets/teclaE.png');
        this.load.spritesheet('setaPortaCima', 'src/assets/setaPortaCima.png', { frameWidth: 204, frameHeight: 204 });
    }

    create() {
        // Define o tamanho do mundo do jogo para 4800x720
        this.physics.world.setBounds(0, 0, 4800, 720);
        this.cameras.main.setBounds(0, 0, 4800, 720);

        // Adiciona o fundo corretamente ao mundo grande
        this.background = this.add.image(2400, 360, 'bghall'); // Centraliza a imagem no mundo
        this.background.displayHeight = 720; // Ajusta o bg para ter 720px de altura.

        this.footstepSound = this.sound.add('footstep');

        // Cria um grupo de hitboxes invisíveis
        this.hitboxes = this.physics.add.staticGroup();
        this.hitboxes.create(2400, 320, null).setSize(4800, 50).setVisible(false); // Hitbox parede
        this.hitboxes.create(1830, 380, null).setSize(200, 100).setVisible(false); // Hitbox catraca cima
        this.hitboxes.create(2040, 610, null).setSize(280, 220).setVisible(false); // Hitbox catraca baixo
        this.hitboxes.create(180, 350, null).setSize(100, 70).setVisible(false); // Hitbox cadeira

        this.celularObjeto = this.add.image(1178, 120, 'celularImagem');
        this.celularObjeto.setScrollFactor(0);

        this.dafiniObjeto = this.physics.add.sprite(1600, 300, 'dafiniImagem').setScale(0.9).refreshBody();
        this.anims.create({
            key: 'dafiniImagem',
            frames: this.anims.generateFrameNumbers('dafiniImagem', { start: 0, end: 9 }),
            frameRate: 11,
            repeat: -1
        });
        this.dafiniObjeto.play('dafiniImagem');
        this.dafiniObjeto.setImmovable(true); // Impede que o NPC seja empurrado
        
        this.setaPorta = this.physics.add.sprite(2480, 390, 'setaPortaCima', 0);
        this.anims.create({
            key: 'setaPortaCima',
            frames: this.anims.generateFrameNumbers('setaPortaCima', { start: 0, end: 3 }),
            frameRate: 6.5,
            repeat: -1
        });
        this.setaPorta.play('setaPortaCima');

        this.setaPorta = this.physics.add.sprite(3840, 390, 'setaPortaCima', 0);
        this.anims.create({
            key: 'setaPortaCima',
            frames: this.anims.generateFrameNumbers('setaPortaCima', { start: 0, end: 3 }),
            frameRate: 6.5,
            repeat: -1
        });
        this.setaPorta.play('setaPortaCima');

        this.taskObjeto = this.physics.add.sprite(1600, 150, 'taskImagem', 0);
        this.anims.create({
            key: 'taskKey',
            frames: this.anims.generateFrameNumbers('taskImagem', { start: 0, end: 2 }),
            frameRate: 11,
            repeat: -1
        });
        this.taskObjeto.play('taskKey');

        // Fade-Out e troca de cena ao pressionar ESC
        this.input.keyboard.on('keydown-ESC', () => {
            this.cameras.main.fadeOut(1000); // Faz o fade-out
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start('cenaPause'); // Muda de cena APÓS o fade
            });
        });

        // Cria o sprite do protagonista com física ativada e profundidade
        this.protagonista = this.physics.add.sprite(400, 700, 'breath', 0).setCollideWorldBounds(true).setScale(0.75);
        // Ativa a câmera para seguir o jogador
        this.cameras.main.startFollow(this.protagonista);
        this.protagonista.setSize(180, 20);
        this.protagonista.setOffset(45, 260);
        this.physics.add.collider(this.protagonista, this.hitboxes);

        this.add.image(2040, 580, 'catraca').setScale(0.8);

        
        this.anims.create({
            key: 'breath',
            frames: this.anims.generateFrameNumbers('breath', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', { start: 0, end: 2 }),
            frameRate: 9,
            repeat: -1
        });

        this.protagonista.play('breath');

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });
        // Adiciona a tecla "E"
        this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

        this.physics.add.collider(this.protagonista, this.dafiniObjeto);

        // Inicializa a lista com todos os textos do diálogo
        this.textoIndex = 0;
        this.arrayTextos = [
            "Oii, quem é você?? Aqui tá um caos, tem tanta coisa para resolver e está todo mundo pirando. Você trabalha aqui?? Está sem a credencial. Se apresente por favor",
            "Ata, você é o hacker que contrataram. Fiquei sabendo que vocês hackers têm um celular super tecnológico, que até parece mostrar o mundo por trás da tecnologia.",
            "Adoro essas coisas… mas enfim… O prédio está um caos por causa do vírus e você chegou na hora certa para nos ajudar.",
            "Os chefes estão lá no vigésimo andar tentando resolver todo esse problema, pegue o elevador e vá até lá conversar com eles e acabar com tudo isso de uma vez. Rápido!",
            "Aa…na verdade…. tem mais uma coisa…",
            "Como o prédio está um caos, você vai encontrar um pessoal discutindo, mas acho que não é um problema para você, né?",
            "teste"
        ];

        this.pertoDafini = false; // Variável para controlar proximidade
        this.caixaTextoObjeto = this.add.image(400, 550, 'caixaTextoImagem').setVisible(false).setScrollFactor(0); // Caixa de fala fixa
        this.textoObjeto = this.add.text(150, 500, "", { 
            fontSize: '22px', 
            fill: '#000', 
            wordWrap: { width: 500 }, // Permite que o texto ocupe mais espaço
            align: 'left'
        }).setVisible(false).setScrollFactor(0);        
        this.teclaEObjeto = this.add.image(this.dafiniObjeto.x, this.dafiniObjeto.y, 'teclaEImagem').setVisible(false); // Tecla "E" fixa na tela
    }

    update() {
        let speed = 570;
        let moving = false;

        // sequência lógica para movimento:
        if (this.cursors.left.isDown || this.keys.A.isDown) {
            this.protagonista.setVelocityX(-speed);
            this.protagonista.setFlipX(true);
            moving = true;
        } else if (this.cursors.right.isDown || this.keys.D.isDown) {
            this.protagonista.setVelocityX(speed);
            this.protagonista.setFlipX(false);
            moving = true;
        } else {
            this.protagonista.setVelocityX(0);
        }
        if (this.cursors.up.isDown || this.keys.W.isDown) {
            this.protagonista.setVelocityY(-speed);
            moving = true;
        } else if (this.cursors.down.isDown || this.keys.S.isDown) {
            this.protagonista.setVelocityY(speed);
            moving = true;
        } else {
            this.protagonista.setVelocityY(0);
        }

        // sequência lógica para animação:
        if (moving == true) {
            this.protagonista.anims.play('run', true);
            if (!this.footstepSound.isPlaying) {
                this.footstepSound.play({ loop: true });
            }
        } else {
            this.protagonista.anims.play('breath', true);
            this.footstepSound.stop();
        }

        // verifica se o jogador está perto da Dafini
        let distance = Phaser.Math.Distance.Between(
            this.protagonista.x, 
            this.protagonista.y, 
            this.dafiniObjeto.x, 
            this.dafiniObjeto.y
        );

        if (distance < 200) { // define a distância para ativar o botão "E"
            this.pertoDafini = true;
            this.teclaEObjeto.setVisible(true);
            this.teclaEObjeto.setPosition(this.dafiniObjeto.x - 100, this.dafiniObjeto.y - 100);
        } else {
            this.pertoDafini = false;
            this.teclaEObjeto.setVisible(false);
        }
        

        // se pressionar "E" e estiver perto da Dafini, inicia o diálogo
        if (this.pertoDafini && Phaser.Input.Keyboard.JustDown(this.keyE)) {
            this.comecarDialogo();
        }
    }

    comecarDialogo() {
        // mostra o balão de fala e o texto
        this.caixaTextoObjeto.setVisible(true);
        this.textoObjeto.setVisible(true);
        this.textoObjeto.setText(this.arrayTextos[this.textoIndex]);

        // aumenta o índice do diálogo
        this.textoIndex++;

        // quando terminar o diálogo
        if (this.textoIndex >= this.arrayTextos.length) {
            this.terminarDialogo();
        }
    }

    terminarDialogo() {
        // esconde o balão de fala e o texto
        this.caixaTextoObjeto.setVisible(false);
        this.textoObjeto.setVisible(false);
        this.textoIndex = 0; //repetir diálogo
    }
}