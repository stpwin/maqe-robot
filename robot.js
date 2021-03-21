const { DIRECTION } = require('./constant')

function robot() {
    this.x = 0
    this.y = 0
    this.direction = 0
}

robot.prototype.goAhead = function(n) {
    switch (this.direction) {
        case 0:
            this.y += n
            break
        case 1:
            this.x += n
            break
        case 2:
            this.y -= n
            break
        case 3:
            this.x -= n
            break
    }
}

robot.prototype.turnLeft = function() {
    this.direction = (this.direction + DIRECTION.length - 1) % DIRECTION.length
}

robot.prototype.turnRight = function () {
    this.direction = (this.direction + 1) % DIRECTION.length
}

robot.prototype.printPosition = function () {
    console.log(`X: ${this.x} Y: ${this.y} Direction: ${DIRECTION[this.direction]}`)
}

module.exports = robot