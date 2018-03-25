const random = require('string-random');

export function generateRandomText() {
	return random(16, {specials: false, numbers: true, letters: true});
}
