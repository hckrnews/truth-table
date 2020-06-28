import { NandTruthTable } from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [true, false],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [true, true, true, false],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [true, true, true, true, true, true, true, false],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
        ],
    },
];

describe.each(TestCasesResult)(
    'Test nand',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = NandTruthTable.create(input);
            expect(table.output).toMatchObject(expectedResult);
        });
    }
);
