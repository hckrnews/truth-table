import { XandGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XandTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => XandGate.create(row).output);
        this.result = this.inputs.map(row => [
            XandGate.create(row).output,
            ...row,
        ]);
    }
}

export default XandTruthTable;
