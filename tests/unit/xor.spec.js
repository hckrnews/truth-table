import { XorTruthTable } from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [
            false, // 0
            true, // 1
        ],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [
            false, // 00
            true, // 01
            true, // 10
            false, // 11
        ],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [
            false, // 000
            true, // 001
            true, // 010
            false, // 011
            true, // 100
            false, // 101
            false, // 110
            true, // 111
        ],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            false, // 0000
            true, // 0001
            true, // 0010
            false, // 0011
            true, // 0100
            false, // 0101
            false, // 0110
            true, // 0111
            true, // 1000
            false, // 1001
            false, // 1010
            true, // 1011
            false, // 1100
            true, // 1101
            true, // 1110
            false, // 1111
        ],
    },
];

describe.each(TestCasesResult)(
    'Test xor',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = XorTruthTable.create(input);
            expect(table.output).toMatchObject(expectedResult);
        });
    }
);
