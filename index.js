const input = process.argv[2];
const inputChars = input.split("");
const DIRECTIONS = ["North", "East", "South", "West"];

const isNumber = {
	0: 1,
	1: 1,
	2: 1,
	3: 1,
	4: 1,
	5: 1,
	6: 1,
	7: 1,
	8: 1,
	9: 1,
};

const robot = {
	x: 0,
	y: 0,
	direction: 0,

	goAhead(n) {
		switch (this.direction) {
			case 0: //North
				this.y += n;
				break;
			case 1: //East
				this.x += n;
				break;
			case 2: //South
				this.y -= n;
				break;
			case 3: //West
				this.x -= n;
				break;
			default:
				break;
		}
	},
	turnLeft(count) {
		this.direction =
			(this.direction + DIRECTIONS.length - count) % DIRECTIONS.length;
	},
	turnRight(count) {
		this.direction = (this.direction + count) % DIRECTIONS.length;
	},
	printPosition() {
		console.log(
			`X: ${this.x} Y: ${this.y} Direction: ${DIRECTIONS[this.direction]}`
		);
	},
};

const TURN_MAP = {
	W: robot.goAhead,
	L: robot.turnLeft,
	R: robot.turnRight,
};

const getStep = (chars) => {
	let step = 0;
	let i = 1;
	for (i; i < chars.length; i++) {
		if (!isNumber[chars[i]]) {
			break;
		}
		step += chars[i];
	}
	return [Number(step), i - 1];
};

const getNextSameChar = (chars, preferredChar) => {
	let count = 1;
	let i = 1;
	for (i; i < chars.length; i++) {
		if (chars[i] !== preferredChar) {
			break;
		}
		count++;
	}
	if (count >= 4) count -= 4; // short circuit
	return [count, i - 1];
};

for (let i = 0; i < inputChars.length; i++) {
	if (TURN_MAP[inputChars[i]]) {
		const nextChunk = inputChars.slice(i);
		const [count, nextIndex] =
			inputChars[i] === "W"
				? getStep(nextChunk)
				: getNextSameChar(nextChunk, inputChars[i]);
		TURN_MAP[inputChars[i]].bind(robot)(count);
		i += nextIndex;
	}
}
robot.printPosition();
