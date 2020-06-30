import { XnorGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XnorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => XnorGate.create(row).output);
        this.result = this.inputs.map(row => [
            XnorGate.create(row).output,
            ...row,
        ]);
    }
}

export default XnorTruthTable;
