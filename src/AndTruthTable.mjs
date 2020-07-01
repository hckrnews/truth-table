import { and } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class AndTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => and(row));
        this.result = this.inputs.map(row => [and(row), ...row]);
    }
}

export default AndTruthTable;
