import { xor } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class XorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map(row => xor(row));
        this.result = this.inputs.map(row => [xor(row), ...row]);
    }
}

export default XorTruthTable;
