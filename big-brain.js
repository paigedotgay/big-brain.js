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

/**
 * Sets and generators can't use index notation, which is kinda annoying.
 * The following functions should work on all iterables.
 */

/**
 * Returns the first item from most iterables without mutation.
 * @param {Iterable} iter 
 */
function first(iter) {
  const [first] = iter;
  return first
}

/**
 * Returns the second item from most iterables without mutation.
 * @param {Iterable} iter 
 */
function second(iter) {
  const [_, second] = iter;
  return second;
}

/**
 * Returns all items after the first from most iterables without mutation.
 * @param {Iterable} iter 
 */
function rest(iter) {
  const [_, ...rest] = iter;
  return rest;
}

/**
 * Returns the last item from most iterables without mutation.
 * Makes an array from the iterable to compensate generators.
 * @param {Iterable} iter
 */
function last(iter) {
  const arr = Array.from(iter);
  return arr[arr.length - 1];
}

module.exports = { randInt, range, randChoice, shuffleArray };x