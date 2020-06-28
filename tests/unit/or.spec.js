import { OrTruthTable } from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [false, true],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [false, true, true, true],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [false, true, true, true, true, true, true, true],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            false,
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
        ],
    },
];

describe.each(TestCasesResult)(
    'Test or',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = OrTruthTable.create(input);
            expect(table.output).toMatchObject(expectedResult);
        });
    }
);
