const { commandCodeParser } = require('./utils')
const robot = require('./robot')

const maqeRobot = new robot();
const rawInput = process.argv.slice(2, 3)
const inputString = rawInput.join('').toUpperCase()
const commandGroup = commandCodeParser(inputString)

for (const { commandCode, step } of commandGroup) {
    switch (commandCode) {
        case 'W':
            step && maqeRobot.goAhead(step)
            break
        case 'L':
            maqeRobot.turnLeft()
            break
        case 'R':
            maqeRobot.turnRight()
            break
    }
}

maqeRobot.printPosition()