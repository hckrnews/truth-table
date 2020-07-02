import { nor } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class NorTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map((row) => nor(row));
        this.result = this.inputs.map((row) => [nor(row), ...row]);
    }
}

export default NorTruthTable;
