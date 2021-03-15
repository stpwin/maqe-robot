const { DIRECTION } = require('./constant')

const robot = {
    x: 0,
    y: 0,
    direction: 0, //0 - 3

    goAhead(n) {
        switch (this.direction) {
            case 0: //North
                this.y += n
                break
            case 1: //East
                this.x += n
                break
            case 2: //South
                this.y -= n
                break
            case 3: //West
                this.x -= n
                break
        }
    },
    turnLeft() {
        this.direction = (this.direction + DIRECTION.length - 1) % DIRECTION.length
    },
    turnRight() {
        this.direction = (this.direction + 1) % DIRECTION.length
    },
    printPosition() {
        console.log(`X: ${this.x} Y: ${this.y} Direction: ${DIRECTION[this.direction]}`)
    }
}

module.exports = robot