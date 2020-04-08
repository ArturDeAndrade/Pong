// Display.js
class Display {
	constructor(w, h) {
		this.pOne = new Paddle(40, screenH * .5, w, h)           // Do something about screenW and screenH variables
		this.pTwo = new Paddle(screenW - 40, screenH * .5, w, h) // Do something about screenW and screenH variables
		this.ball = new Ball(w)
		this.show = () => {
			this.updatePaddles()
			this.ball.show()
		}
		this.updatePaddles = () => {
			this.pOne.show()
			this.pTwo.show()
			this.pOne.move(87, 83) //keyCode for "a": 65
			this.pTwo.move(75, 77)
		}
	}
}

// Paddle.js
class Paddle {
	constructor(x, y, w, h) {
		this.pos = createVector(x, y)
		this.size = createVector(w, h)
		this.show = () => {
			fill(255)
			noStroke()
			rectMode(CENTER)
			rect(this.pos.x, this.pos.y, this.size.x, this.size.y)
			this.move()
		}
		this.move = (moveUp, moveDown) => {
			if (keyIsDown(moveUp) && this.pos.y > 0) {
				this.pos.y -= 8
			}
			if (keyIsDown(moveDown) && this.pos.y < screenH) { // Do something about screenH variable
				this.pos.y += 8
			}
		}
	}
}

// Ball.js
class Ball {
	constructor(w, x = screenW * .5, y = screenH * .5) { // Do something about screenW and screenH variables
		this.pos = createVector(x, y)
		this.vel = createVector(4, 4)
		this.size = w
		this.show = () => {
			fill(255)
			noStroke()
			rectMode(CENTER)
			rect(this.pos.x, this.pos.y, this.size)
			this.move()
		}
		this.move = () => {
			this.pos.add(this.vel)
			if (this.pos.y > screenH || this.pos.y < 0) { // Do something about screenH variable
				this.vel.y *= -1
			}
			if (this.pos.x > screenW || this.pos.x < 0) { // Do something about screenW variable
				this.vel.x *= -1
			}
		}
	}
}

// Pong.js
let game
const screenW = 1350
const screenH = 900
const w = 10 // Width of the paddles and the ball
const h = 60 // Height of the paddles

function setup() {
	createCanvas(screenW, screenH)
	game = new Display(w, h)
}

function draw() {
	background(0)

	game.show()
}