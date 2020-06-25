class TruthTable {
    constructor(propositions) {
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

    dec2bin(number) {
        return parseInt(number, 10)
            .toString(2)
            .padStart(this.propositions, '0');
    }

    addRow(row) {
        const binary = this.dec2bin(row);
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

    get andWithInputs() {
        return this.inputs.map(row => [row.every(Boolean), ...row]);
    }

    get orWithInputs() {
        return this.inputs.map(row => [row.some(Boolean), ...row]);
    }

    get nandWithInputs() {
        return this.inputs.map(row => [!row.every(Boolean), ...row]);
    }

    get norWithInputs() {
        return this.inputs.map(row => [!row.some(Boolean), ...row]);
    }

    static create(propositions) {
        const table = new TruthTable(propositions);

        table.generate();

        return table;
    }
}

export default TruthTable;
