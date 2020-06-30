import { XnandTruthTable } from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [false, false],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [false, true, true, false],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [false, true, true, true, true, true, true, false],
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
            false,
        ],
    },
];

describe.each(TestCasesResult)(
    'Test xnand',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = XnandTruthTable.create(input);
            expect(table.output).toMatchObject(expectedResult);
        });
    }
);
