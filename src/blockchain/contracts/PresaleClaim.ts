
import Contract from './Contract';
import abi from '../abis/Presale.json';

class PresaleClaim extends Contract {
  constructor(options, address) {
    super(options, "PresaleClaim", abi, address);
  }
}

export default PresaleClaim;