import TruthTable from './BaseTruthTable.mjs';
import Helper from './Helper';

class XnorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(
            row => Helper.totalTrueInputs(row) % 2 === 0
        );
        this.result = this.inputs.map(row => [
            Helper.totalTrueInputs(row) % 2 === 0,
            ...row,
        ]);
    }
}

export default XnorTruthTable;
