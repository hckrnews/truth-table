import InvalidInputError from './InvalidInputError';

export default class Helper {
    static dec2bin(number, propositions) {
        if (!Number.isInteger(number)) {
            throw new InvalidInputError(number, 'number isnt a number');
        }

        if (!Number.isInteger(propositions)) {
            throw new InvalidInputError(
                propositions,
                'propositions isnt a number'
            );
        }

        const binary = parseInt(number, 10).toString(2);

        return binary.padStart(propositions, '0');
    }

    static totalTrueInputs(row) {
        if (!Array.isArray(row)) {
            throw new InvalidInputError(row, 'row isnt an array');
        }

        if (row.length < 1) {
            return 0;
        }

        return row.reduce(
            (accumulator, currentValue) => accumulator + (currentValue ? 1 : 0)
        );
    }
}
