const parseRegex = /(W([0-9]*))|L|R/gi

const commandCodeParser = (inputString) => {
    const matches = []
    let parseGroup
    while ((parseGroup = parseRegex.exec(inputString)) !== null) {
        if (parseGroup.index === parseRegex.lastIndex) {
            parseRegex.lastIndex++
        }
        matches.push({
            commandCode: parseGroup[0].slice(0, 1),
            step: parseInt(parseGroup[2])
        });
    }
    return matches
}


module.exports = { commandCodeParser }