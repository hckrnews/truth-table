import { XorGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => XorGate.create(row).output);
        this.result = this.inputs.map(row => [
            XorGate.create(row).output,
            ...row,
        ]);
    }
}

export default XorTruthTable;
