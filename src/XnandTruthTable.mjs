import { XnandGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XnandTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => XnandGate.create(row).output);
        this.result = this.inputs.map(row => [
            XnandGate.create(row).output,
            ...row,
        ]);
    }
}

export default XnandTruthTable;
