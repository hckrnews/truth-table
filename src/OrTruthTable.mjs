import TruthTable from './BaseTruthTable.mjs';

class OrTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => row.some(Boolean));
        this.result = this.inputs.map(row => [row.some(Boolean), ...row]);
    }
}

export default OrTruthTable;
