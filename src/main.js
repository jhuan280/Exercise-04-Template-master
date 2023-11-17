// Exercise 04: Slime World
// Name: Jackie Huang
// Date: 11/17/2023

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 320,
    height: 240,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    scene: [ Overworld ]
}

const game = new Phaser.Game(config)