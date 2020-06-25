# Hack JavaScript objects

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]

Get a flat version of the object

## Installation

`npm install @hckrnews/truth-table`
or
`yarn add @hckrnews/truth-table`

## Test the package

`npm run test`
or
`yarn test`

## Usage

Example usage:
```
const table = TruthTable.create(3);
```

Table inputs result:
```
table.inputs
```
Output:
```
[
    [false, false, false],
    [false, false, true],
    [false, true, false],
    [false, true, true],
    [true, false, false],
    [true, false, true],
    [true, true, false],
    [true, true, true],
]
```

To receive results of the and operator:
```
table.and
```
Output:
```
[false, false, false, false, false, false, false, true]
```

Do you with te receive the result with the inputs of the and operator:
```
table.andWithInputs
```
Output:
```
[
    [false, false, false, false],
    [false, false, false, true],
    [false, false, true, false],
    [false, false, true, true],
    [false, true, false, false],
    [false, true, false, true],
    [false, true, true, false],
    [true, true, true, true],
]
```

All options:
* and
* andWithInputs
* nand
* nandWithInputs
* or
* orWithInputs
* nor
* notWithInputs

[npm-url]: https://www.npmjs.com/package/@hckrnews/truth-table
[npm-image]: https://img.shields.io/npm/v/@hckrnews/truth-table.svg
[travis-url]: https://travis-ci.org/hckrnews/truth-table
[travis-image]: https://img.shields.io/travis/hckrnews/truth-table/master.svg
[coveralls-url]: https://coveralls.io/r/hckrnews/truth-table
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/truth-table/master.svg
