class TruthTable {
    constructor(propositions) {
        this.propositions = propositions;
        this.inputs = [];
    }

    get combinations() {
        return 2 ** this.propositions;
    }

    generate() {
        for (let index = 0; index < this.combinations; index += 1) {
            const binary = parseInt(index, 10)
                .toString(2)
                .padStart(this.propositions, '0');
            this.addRow(binary, index);
        }
    }

    addRow(string, col) {
        this.inputs.push([]);

        for (let index = 0; index < this.propositions; index += 1) {
            this.inputs[col].push(string.substr(index, 1) === '1');
        }
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
