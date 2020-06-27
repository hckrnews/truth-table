import TruthTable from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [
            [true, false], // 0
            [false, true], // 1
        ],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [
            [true, false, false], // 00
            [false, false, true], // 01
            [false, true, false], // 10
            [true, true, true], // 11
        ],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [
            [true, false, false, false], // 000
            [false, false, false, true], // 001
            [false, false, true, false], // 010
            [true, false, true, true], // 011
            [false, true, false, false], // 100
            [true, true, false, true], // 101
            [true, true, true, false], // 110
            [false, true, true, true], // 111
        ],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            [true, false, false, false, false], // 0000
            [false, false, false, false, true], // 0001
            [false, false, false, true, false], // 0010
            [true, false, false, true, true], // 0011
            [false, false, true, false, false], // 0100
            [true, false, true, false, true], // 0101
            [true, false, true, true, false], // 0110
            [false, false, true, true, true], // 0111
            [false, true, false, false, false], // 1000
            [true, true, false, false, true], // 1001
            [true, true, false, true, false], // 1010
            [false, true, false, true, true], // 1011
            [true, true, true, false, false], // 1100
            [false, true, true, false, true], // 1101
            [false, true, true, true, false], // 1110
            [true, true, true, true, true], // 1111
        ],
    },
];

describe.each(TestCasesResult)(
    'Test xnor with inputs',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = TruthTable.create(input);
            expect(table.xnorWithInputs).toMatchObject(expectedResult);
        });
    }
);
