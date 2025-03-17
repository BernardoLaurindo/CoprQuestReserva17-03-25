class cenaTutorial extends Phaser.Scene {
    constructor() {
        super({ key: 'cenaTutorial' });
    }

    preload() {
        this.load.image('learning', 'src/assets/bgTutorial.png'); // Imagem de fundo opções
        this.load.spritesheet('breath', 'src/assets/breathSheet.png', { frameWidth: 250, frameHeight: 296 });
        this.load.spritesheet('run', 'src/assets/runSheet.png', { frameWidth: 250, frameHeight: 296 });
        this.load.audio('footstep', 'src/assets/soundPassos.mp3'); // Caminho do som de passos
        this.load.image('setas', 'src/assets/setasTutorial.png');
        this.load.spritesheet('setaPorta', 'src/assets/setaPorta.png', { frameWidth: 284, frameHeight: 184 });

    }

    create() {
        let centerX = this.cameras.main.width / 2;
        let centerY = this.cameras.main.height / 2;

        this.cameras.main.fadeIn(1000);

        this.bg = this.add.image(centerX, centerY, 'learning').setScale(0.7);
        this.bg.displayWidth = 1280;
        this.bg.displayHeight = 720;

        this.footstepSound = this.sound.add('footstep');

        this.hitbox = this.physics.add.staticImage(640, 350, null);
        this.hitbox.setSize(1280, 60).setVisible(false); // Hitbox parede

        this.setaPorta = this.physics.add.sprite(1100, 500, 'setaPorta', 0);
        this.anims.create({
            key: 'setaPorta',
            frames: this.anims.generateFrameNumbers('setaPorta', { start: 0, end: 2 }),
            frameRate: 6.5,
            repeat: -1
        });
        this.setaPorta.play('setaPorta');

        // Criamos o sprite do protagonista com física ativada e profundidade
        this.protagonista = this.physics.add.sprite(10, 400, 'breath', 0).setCollideWorldBounds(true).setScale(0.75);
        // Ativa a câmera para seguir o jogador
        this.protagonista.setSize(180, 20);
        this.protagonista.setOffset(45, 260);
        this.physics.add.collider(this.protagonista, this.hitbox);

        // Criamos as animações
        this.anims.create({
            key: 'breath',
            frames: this.anims.generateFrameNumbers('breath', { start: 0, end: 9 }),
            frameRate: 11,
            repeat: -1
        });

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('run', { start: 0, end: 2 }),
            frameRate: 10,
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

        this.add.image(130, 600, 'setas').setScale(0.7); // seta esquerda
        this.add.text(240, 600, 'Use as setas para se movimentar', {
            fontSize: '30px',
            fill: '#fff',
            fontStyle: 'bold',
            stroke: '#000',  // Cor do contorno
            strokeThickness: 4 // Espessura do contorno
        });
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
        } if (this.cursors.up.isDown || this.keys.W.isDown) {
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
        // Verifica se o personagem chegou ao limite direito da tela
        if (this.protagonista.x >= 1100) {  // Ajuste conforme necessário
            this.footstepSound.stop(); // Para o som de passos
            this.scene.start('cena1fase1'); // Muda para a cena ScenePlay
        }
    }
}