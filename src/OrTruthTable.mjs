import { or } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class OrTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => or(row));
        this.result = this.inputs.map(row => [or(row), ...row]);
    }
}

export default OrTruthTable;
