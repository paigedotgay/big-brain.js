# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Unit testing.

### Changed
- `rest(iter)` returns an iterable of the same type as `iter`.

## [3.0.0]

### Added
- `first()`, `second()`, `rest()`, and `last()`.

### Fixed
- `shuffleArray(array)` no longer mutates `array`.
- Changelog formatting.
- LICENSE formatting and license headers.

### Changed
- big-brain.js is now an ES Module.

## [2.0.1]

### Changed
- `randInt()` now accepts `min, max` instead of `...args`.
- `range()` now accepts `start, stop, step` instead of `...args`.
- `range()` is now a generator function instead of just returning an array. This should require less resources. 
- To create an array from a range you must now use `Array.from(range())`.
- Improved all function documentation.

## [1.0.1]

### Added
- `range()`, `randInt()`, `randChoice()`, and `shuffleArray()`.

[unreleased]: https://github.com/paigedotgay/big-brain.js/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/paigedotgay/big-brain.js/compare/v2.0.1...v3.0.0
[2.0.1]: https://github.com/paigedotgay/big-brain.js/compare/v1.0.1...v2.0.1
[1.0.1]: https://github.com/paigedotgay/big-brain.js/releases/tag/v1.0.1
