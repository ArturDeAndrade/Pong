// Display.js
class Display {
    constructor() {
        this.pOne = new Paddle(40, screenH * .5)
        this.pTwo = new Paddle(screenW - 40, screenH * .5)
        this.show = () => {
            this.pOne.show()
            this.pTwo.show()
            stroke(255)
            strokeWeight(10)
            line(screenW * .5, 0, screenW * .5, screenH)
        }
    }
}

// Paddle.js
class Paddle {
    constructor(x, y) {
        this.pos = [x, y]
        this.size = [w, h]
        this.show = () => {
            fill(255)
            noStroke()
            rectMode(CENTER)
            rect(x, y, w, h)
        }
    }
}

// Pong.js
let game
const screenW = 1350
const screenH = 900
const w = 10
const h = 60

function setup() {
    createCanvas(screenW, screenH)
    game = new Display()
}

function draw() {
    background(0)

    game.show()
}