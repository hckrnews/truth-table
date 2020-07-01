import { NotTruthTable } from '../../src/TruthTable.mjs';

const TestCasesResult = [
    {
        description: '1 proposition',
        input: 1,
        expectedResult: [[true], [false]],
    },
    {
        description: '2 propositions',
        input: 2,
        expectedResult: [
            [true, true],
            [true, false],
            [false, true],
            [false, false],
        ],
    },
    {
        description: '3 propositions',
        input: 3,
        expectedResult: [
            [true, true, true],
            [true, true, false],
            [true, false, true],
            [true, false, false],
            [false, true, true],
            [false, true, false],
            [false, false, true],
            [false, false, false],
        ],
    },
    {
        description: '4 propositions',
        input: 4,
        expectedResult: [
            [true, true, true, true],
            [true, true, true, false],
            [true, true, false, true],
            [true, true, false, false],
            [true, false, true, true],
            [true, false, true, false],
            [true, false, false, true],
            [true, false, false, false],
            [false, true, true, true],
            [false, true, true, false],
            [false, true, false, true],
            [false, true, false, false],
            [false, false, true, true],
            [false, false, true, false],
            [false, false, false, true],
            [false, false, false, false],
        ],
    },
];

describe.each(TestCasesResult)(
    'Test not',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const table = NotTruthTable.create(input);
            expect(table.output).toMatchObject(expectedResult);
        });
    }
);
