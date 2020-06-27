import Helper from '../../src/Helper';
import InvalidInputError from '../../src/InvalidInputError';

const TestCasesResult = [
    {
        description: '1 = 1',
        number: 1,
        propositions: 1,
        expectedResult: '1',
    },
    {
        description: '1 = 001',
        number: 1,
        propositions: 3,
        expectedResult: '001',
    },
    {
        description: '7 = 111',
        number: 7,
        propositions: 3,
        expectedResult: '111',
    },
    {
        description: '7 = 000111',
        number: 7,
        propositions: 6,
        expectedResult: '000111',
    },
    {
        description: '8 = 1000',
        number: 8,
        propositions: 1,
        expectedResult: '1000',
    },
];

describe.each(TestCasesResult)(
    'Test dec2bin helper',
    ({ description, number, propositions, expectedResult }) => {
        it(description, () => {
            const result = Helper.dec2bin(number, propositions);
            expect(result).toBe(expectedResult);
        });
    }
);

describe('Test dec2bin helper', () => {
    it('Test if the method returns the exception if you dont pass an number', () => {
        function testWrongInput() {
            Helper.dec2bin(null);
        }

        expect(testWrongInput).toThrowError(new Error('number isnt a number'));
        expect(testWrongInput).toThrowError(InvalidInputError);
    });
});

const ErrorTestCases = [
    {
        description: 'test number with a null value',
        number: null,
        propositions: 1,
        expectedError: 'number isnt a number',
    },
    {
        description: 'test number with a string',
        number: 'not ok',
        propositions: 1,
        expectedError: 'number isnt a number',
    },
    {
        description: 'test propositions with a null value',
        number: 1,
        propositions: null,
        expectedError: 'propositions isnt a number',
    },
    {
        description: 'test propositions with a string',
        number: 1,
        propositions: 'not ok',
        expectedError: 'propositions isnt a number',
    },
];

describe.each(ErrorTestCases)(
    'Test dec2bin helper exception test',
    ({ description, number, propositions, expectedError }) => {
        it(description, () => {
            function testWrongInput() {
                Helper.dec2bin(number, propositions);
            }

            expect(testWrongInput).toThrowError(new Error(expectedError));
            expect(testWrongInput).toThrowError(InvalidInputError);
        });
    }
);
