import { xnand } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XnandTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => xnand(row));
        this.result = this.inputs.map(row => [xnand(row), ...row]);
    }
}

export default XnandTruthTable;
