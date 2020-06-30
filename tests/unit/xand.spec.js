import { XandTruthTable } from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [true, true],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [true, false, false, true],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [true, false, false, false, false, false, false, true],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
        ],
    },
];

describe.each(TestCasesResult)(
    'Test xand',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = XandTruthTable.create(input);
            expect(table.output).toMatchObject(expectedResult);
        });
    }
);
