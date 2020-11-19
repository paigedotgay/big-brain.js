/**
 * Returns a random int [min, max).
 * if min is the only arument provided then max wil default to the value given to min, and min will default to 0.
 * @param {Number} min Inclusive minimum choice.
 * @param {Number} max Exclusive maximum choice.
 */
function randInt(min, max=null) {
	const adjMax = (max) ? max : min;
	const adjMin = (max) ? min : 0;
	return Math.floor(Math.random() * (adjMax - adjMin)) + adjMin;
}

/**
 * Generates a range. Functions like Python ranges, except step doesn't need to be negative for a negative range.
 * If start is the only argument provided then stop will default to the value given to start, and start will default to 0.
 * @param {Number} start Where to start the range.
 * @param {Number} stop  Where to end the range.
 * @param {Number} step How much to step by.
 */
function* range(start=0, stop=null, step=1) {
    if (step <= 0) throw SyntaxError('Step must be greater than 0')
    if (stop == null) {
      stop = start;
      start = 0;
    }
    const length = Math.ceil(Math.abs((stop - start) / step));
    for (let i = 0; i < length; i++) {
      yield (start < stop) ? start + i * step: start - i * step;
    }
}

/**
 * Returns a random item from an array.
 * @param {Array} array
 */
function randChoice(array) {
	return array[randInt(array.length)];
}

/**
 * Returns a shuffled array.
 * Does NOT mutate the array.
 * @param {Array} array
 */
function shuffleArray(array) {
	for (const i of range(array.length)) {
		const j = randInt(i);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

module.exports = { randInt, range, randChoice, shuffleArray };