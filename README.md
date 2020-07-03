# Truth Table package

Generate a truth table very easy.
The generated truth tables can be used for e.a. test cases, if you would test a lot of situations.

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Scrutinizer Code Quality][scrutinizer-image]][scrutinizer-url]

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
import AndTruthTable from "@hckrnews/truth-table";

const table = AndTruthTable.create(3);
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
table.output
```
Output:
```
[false, false, false, false, false, false, false, true]
```

Do you with te receive the result with the inputs of the and operator:
```
table.result
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
* AndTruthTable
* NandTruthTable
* OrTruthTable
* NorTruthTable
* XoTruthTable
* XnoTruthTable
* XandTruthTable
* XnandTruthTable
* NotTruthTable

To check all used logic gates:
https://www.npmjs.com/package/@hckrnews/logic-gates

[npm-url]: https://www.npmjs.com/package/@hckrnews/truth-table
[npm-image]: https://img.shields.io/npm/v/@hckrnews/truth-table.svg
[travis-url]: https://travis-ci.org/hckrnews/truth-table
[travis-image]: https://img.shields.io/travis/hckrnews/truth-table/master.svg
[coveralls-url]: https://coveralls.io/r/hckrnews/truth-table
[coveralls-image]: https://img.shields.io/coveralls/hckrnews/truth-table/master.svg
[scrutinizer-url]: https://scrutinizer-ci.com/g/hckrnews/truth-table/?branch=master
[scrutinizer-image]: https://scrutinizer-ci.com/g/hckrnews/truth-table/badges/quality-score.png?b=master
