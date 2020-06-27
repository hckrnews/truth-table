import Helper from '../../src/Helper';
import InvalidInputError from '../../src/InvalidInputError';

const TestCasesResult = [
    {
        description: '[] = 0',
        input: [],
        expectedResult: 0,
    },
    {
        description: '000 = 0',
        input: [false, false, false],
        expectedResult: 0,
    },
    {
        description: '001 = 1',
        input: [false, false, true],
        expectedResult: 1,
    },
    {
        description: '010 = 1',
        input: [false, true, false],
        expectedResult: 1,
    },
    {
        description: '011 = 2',
        input: [false, true, true],
        expectedResult: 2,
    },
    {
        description: '100 = 1',
        input: [true, false, false],
        expectedResult: 1,
    },
    {
        description: '101 = 2',
        input: [true, false, true],
        expectedResult: 2,
    },
    {
        description: '110 = 2',
        input: [true, true, false],
        expectedResult: 2,
    },
    {
        description: '111 = 3',
        input: [true, true, true],
        expectedResult: 3,
    },
];

describe.each(TestCasesResult)(
    'Test totalTrueInputs helper',
    ({ description, input, expectedResult }) => {
        it(description, () => {
            const result = Helper.totalTrueInputs(input);
            expect(result).toBe(expectedResult);
        });
    }
);

const ErrorTestCases = [
    {
        description: 'test input with a null value',
        input: null,
        expectedError: 'row isnt an array',
    },
    {
        description: 'test input with a string',
        input: 'not ok',
        expectedError: 'row isnt an array',
    },
];

describe.each(ErrorTestCases)(
    'Test totalTrueInputs helper exception test',
    ({ description, input, expectedError }) => {
        it(description, () => {
            function testWrongInput() {
                Helper.totalTrueInputs(input);
            }

            expect(testWrongInput).toThrowError(new Error(expectedError));
            expect(testWrongInput).toThrowError(InvalidInputError);
        });
    }
);
