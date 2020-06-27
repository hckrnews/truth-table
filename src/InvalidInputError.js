export default class InvalidInputError extends Error {
    constructor(input, ...params) {
        super(...params);

        this.name = 'InvalidInputError';
        this.input = input;
        this.typeOf = typeof input;
    }
}
