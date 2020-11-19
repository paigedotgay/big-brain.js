# version 2.0.1
- `randInt` now accepts `min, max` instead of `...args`
- `range` now accepts `start, stop, step` instead of `...args`
- `range` is now a generator function instead of just returning an array. This should require less resources. 
- To create an array from a range you must now use `Array.from(range())`
- Improved documentation all around.
