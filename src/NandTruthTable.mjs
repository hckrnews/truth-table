import { nand } from '@hckrnews/logic-gates';
import TruthTable from './BaseTruthTable.mjs';

class NandTruthTable extends TruthTable {
    generateOutput() {
        this.output = this.inputs.map((row) => nand(row));
        this.result = this.inputs.map((row) => [nand(row), ...row]);
    }
}

export default NandTruthTable;
