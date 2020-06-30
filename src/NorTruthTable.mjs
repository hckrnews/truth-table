import { NorGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class NorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => NorGate.create(row).output);
        this.result = this.inputs.map(row => [
            NorGate.create(row).output,
            ...row,
        ]);
    }
}

export default NorTruthTable;
