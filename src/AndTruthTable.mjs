import TruthTable from './BaseTruthTable.mjs';

class AndTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => row.every(Boolean));
        this.result = this.inputs.map(row => [row.every(Boolean), ...row]);
    }
}

export default AndTruthTable;
