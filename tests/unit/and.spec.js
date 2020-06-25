import TruthTable from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [false, true],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [false, false, false, true],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [false, false, false, false, false, false, false, true],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
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
            false,
            true,
        ],
    },
];

describe.each(TestCasesResult)(
    'Test and',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = TruthTable.create(input);
            expect(table.and).toMatchObject(expectedResult);
        });
    }
);
