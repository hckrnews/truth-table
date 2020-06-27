import TruthTable from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [
            true, // 0
            false, // 1
        ],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [
            true, // 00
            false, // 01
            false, // 10
            true, // 11
        ],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [
            true, // 000
            false, // 001
            false, // 010
            true, // 011
            false, // 100
            true, // 101
            true, // 110
            false, // 111
        ],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            true, // 0000
            false, // 0001
            false, // 0010
            true, // 0011
            false, // 0100
            true, // 0101
            true, // 0110
            false, // 0111
            false, // 1000
            true, // 1001
            true, // 1010
            false, // 1011
            true, // 1100
            false, // 1101
            false, // 1110
            true, // 1111
        ],
    },
];

describe.each(TestCasesResult)(
    'Test xnor',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = TruthTable.create(input);
            expect(table.xnor).toMatchObject(expectedResult);
        });
    }
);
