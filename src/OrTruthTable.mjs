import { OrGate } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class OrTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => OrGate.create(row).output);
        this.result = this.inputs.map(row => [
            OrGate.create(row).output,
            ...row,
        ]);
    }
}

export default OrTruthTable;
