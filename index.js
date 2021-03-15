const { commandCodeParser } = require('./utils')
const robot = require('./robot')

const rawInput = process.argv.slice(2, 3)
const inputString = rawInput.join('').toUpperCase()
const commandGroup = commandCodeParser(inputString)

//Loop through commandGroup then control robot
for (const { commandCode, step } of commandGroup) {
    switch (commandCode) {
        case 'W':
            step && robot.goAhead(step)
            break
        case 'L':
            robot.turnLeft()
            break
        case 'R':
            robot.turnRight()
            break
    }
}

robot.printPosition()