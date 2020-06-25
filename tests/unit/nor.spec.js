import TruthTable from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [true, false],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [true, false, false, false],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [true, false, false, false, false, false, false, false],
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
            false,
        ],
    },
];

describe.each(TestCasesResult)(
    'Test nor',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = TruthTable.create(input);
            expect(table.nor).toMatchObject(expectedResult);
        });
    }
);
