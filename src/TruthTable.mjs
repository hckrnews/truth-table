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
        const result = [];
        this.inputs.forEach(row => {
            result.push(row.every(Boolean));
        });

        return result;
    }

    get nand() {
        const result = [];
        this.inputs.forEach(row => {
            result.push(!row.every(Boolean));
        });

        return result;
    }

    get or() {
        const result = [];
        this.inputs.forEach(row => {
            result.push(row.some(Boolean));
        });

        return result;
    }

    get nor() {
        const result = [];
        this.inputs.forEach(row => {
            result.push(!row.some(Boolean));
        });

        return result;
    }

    get andWithInputs() {
        const result = [];
        this.inputs.forEach(row => {
            result.push([row.every(Boolean), ...row]);
        });

        return result;
    }

    get orWithInputs() {
        const result = [];
        this.inputs.forEach(row => {
            result.push([row.some(Boolean), ...row]);
        });

        return result;
    }

    get nandWithInputs() {
        const result = [];
        this.inputs.forEach(row => {
            result.push([!row.every(Boolean), ...row]);
        });

        return result;
    }

    get norWithInputs() {
        const result = [];
        this.inputs.forEach(row => {
            result.push([!row.some(Boolean), ...row]);
        });

        return result;
    }

    static create(propositions) {
        const table = new TruthTable(propositions);

        table.generate();

        return table;
    }
}

export default TruthTable;
