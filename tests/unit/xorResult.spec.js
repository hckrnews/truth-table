import TruthTable from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [
            [false, false], // 0
            [true, true], // 1
        ],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [
            [false, false, false], // 00
            [true, false, true], // 01
            [true, true, false], // 10
            [false, true, true], // 11
        ],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [
            [false, false, false, false], // 000
            [true, false, false, true], // 001
            [true, false, true, false], // 010
            [false, false, true, true], // 011
            [true, true, false, false], // 100
            [false, true, false, true], // 101
            [false, true, true, false], // 110
            [true, true, true, true], // 111
        ],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            [false, false, false, false, false], // 0000
            [true, false, false, false, true], // 0001
            [true, false, false, true, false], // 0010
            [false, false, false, true, true], // 0011
            [true, false, true, false, false], // 0100
            [false, false, true, false, true], // 0101
            [false, false, true, true, false], // 0110
            [true, false, true, true, true], // 0111
            [true, true, false, false, false], // 1000
            [false, true, false, false, true], // 1001
            [false, true, false, true, false], // 1010
            [true, true, false, true, true], // 1011
            [false, true, true, false, false], // 1100
            [true, true, true, false, true], // 1101
            [true, true, true, true, false], // 1110
            [false, true, true, true, true], // 1111
        ],
    },
];

describe.each(TestCasesResult)(
    'Test xor with inputs',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = TruthTable.create(input);
            expect(table.xorWithInputs).toMatchObject(expectedResult);
        });
    }
);
