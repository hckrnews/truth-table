import { xand } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XandTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map((row) => xand(row));
        this.result = this.inputs.map((row) => [xand(row), ...row]);
    }
}

export default XandTruthTable;
