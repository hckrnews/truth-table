import Helper from './Helper';
import InvalidInputError from './InvalidInputError';

class TruthTable {
    constructor(propositions) {
        if (!Number.isInteger(propositions)) {
            throw new InvalidInputError(
                propositions,
                'propositions isnt a number'
            );
        }

        this.propositions = propositions;
        this.inputs = [];
    }

    get combinations() {
        return 2 ** this.propositions;
    }

    generate() {
        const inputs = Array(this.combinations).fill(false);

        this.inputs = inputs.map((value, index) => this.addRow(index));
    }

    addRow(row) {
        const binary = Helper.dec2bin(row, this.propositions);
        const inputs = Array(this.propositions).fill(false);

        return inputs.map((value, index) => binary.substr(index, 1) === '1');
    }

    get and() {
        return this.inputs.map(row => row.every(Boolean));
    }

    get nand() {
        return this.inputs.map(row => !row.every(Boolean));
    }

    get or() {
        return this.inputs.map(row => row.some(Boolean));
    }

    get nor() {
        return this.inputs.map(row => !row.some(Boolean));
    }

    get xor() {
        return this.inputs.map(row => Helper.totalTrueInputs(row) % 2 === 1);
    }

    get xnor() {
        return this.inputs.map(row => Helper.totalTrueInputs(row) % 2 === 0);
    }

    get andWithInputs() {
        return this.inputs.map(row => [row.every(Boolean), ...row]);
    }

    get nandWithInputs() {
        return this.inputs.map(row => [!row.every(Boolean), ...row]);
    }

    get orWithInputs() {
        return this.inputs.map(row => [row.some(Boolean), ...row]);
    }

    get norWithInputs() {
        return this.inputs.map(row => [!row.some(Boolean), ...row]);
    }

    get xorWithInputs() {
        return this.inputs.map(row => [
            Helper.totalTrueInputs(row) % 2 === 1,
            ...row,
        ]);
    }

    get xnorWithInputs() {
        return this.inputs.map(row => [
            Helper.totalTrueInputs(row) % 2 === 0,
            ...row,
        ]);
    }

    static create(propositions) {
        const table = new TruthTable(propositions);

        table.generate();

        return table;
    }
}

export default TruthTable;
