import TruthTable from '../../src/TruthTable.mjs';
import InvalidInputError from '../../src/InvalidInputError';

const ErrorTestCases = [
    {
        description: 'test propositions with a null value',
        propositions: null,
        expectedError: 'propositions isnt a number',
    },
    {
        description: 'test propositions with a string',
        propositions: 'not ok',
        expectedError: 'propositions isnt a number',
    },
];

describe.each(ErrorTestCases)(
    'Test totalTrueInputs helper exception test',
    ({ description, propositions, expectedError }) => {
        it(description, () => {
            function testWrongInput() {
                TruthTable.create(propositions);
            }

            expect(testWrongInput).toThrowError(new Error(expectedError));
            expect(testWrongInput).toThrowError(InvalidInputError);
        });
    }
);
