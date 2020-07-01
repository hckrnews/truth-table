import { xnor } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XnorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => xnor(row));
        this.result = this.inputs.map(row => [xnor(row), ...row]);
    }
}

export default XnorTruthTable;
