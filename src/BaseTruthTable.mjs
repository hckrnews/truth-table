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
        this.output = [];
        this.result = [];
    }

    get combinations() {
        return 2 ** this.propositions;
    }

    generateInputs() {
        const inputs = Array(this.combinations).fill(false);

        this.inputs = inputs.map((value, index) => this.addRow(index));
    }

    generateOutput() {}

    addRow(row) {
        const binary = Helper.dec2bin(row, this.propositions);
        const inputs = Array(this.propositions).fill(false);

        return inputs.map((value, index) => binary.substr(index, 1) === '1');
    }

    static create(propositions) {
        const table = new this(propositions);

        table.generateInputs();
        table.generateOutput();

        return table;
    }
}

export default TruthTable;
