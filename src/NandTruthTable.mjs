import { NandGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class NandTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => NandGate.create(row).output);
        this.result = this.inputs.map(row => [
            NandGate.create(row).output,
            ...row,
        ]);
    }
}

export default NandTruthTable;
