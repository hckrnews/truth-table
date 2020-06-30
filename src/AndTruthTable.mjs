import { AndGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class AndTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => AndGate.create(row).output);
        this.result = this.inputs.map(row => [
            AndGate.create(row).output,
            ...row,
        ]);
    }
}

export default AndTruthTable;
