import { XandTruthTable } from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [
            [true, false],
            [true, true],
        ],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [
            [true, false, false],
            [false, false, true],
            [false, true, false],
            [true, true, true],
        ],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [
            [true, false, false, false],
            [false, false, false, true],
            [false, false, true, false],
            [false, false, true, true],
            [false, true, false, false],
            [false, true, false, true],
            [false, true, true, false],
            [true, true, true, true],
        ],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            [true, false, false, false, false],
            [false, false, false, false, true],
            [false, false, false, true, false],
            [false, false, false, true, true],
            [false, false, true, false, false],
            [false, false, true, false, true],
            [false, false, true, true, false],
            [false, false, true, true, true],
            [false, true, false, false, false],
            [false, true, false, false, true],
            [false, true, false, true, false],
            [false, true, false, true, true],
            [false, true, true, false, false],
            [false, true, true, false, true],
            [false, true, true, true, false],
            [true, true, true, true, true],
        ],
    },
];

describe.each(TestCasesResult)(
    'Test xand with inputs',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = XandTruthTable.create(input);
            expect(table.result).toMatchObject(expectedResult);
        });
    }
);
