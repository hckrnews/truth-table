import { not } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class NotTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map((row) => not(row));
        this.result = this.inputs.map((row) => [not(row), ...row]);
    }
}

export default NotTruthTable;
