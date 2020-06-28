import TruthTable from './BaseTruthTable.mjs';
import Helper from './Helper';

class XorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(
            row => Helper.totalTrueInputs(row) % 2 === 1
        );
        this.result = this.inputs.map(row => [
            Helper.totalTrueInputs(row) % 2 === 1,
            ...row,
        ]);
    }
}

export default XorTruthTable;
