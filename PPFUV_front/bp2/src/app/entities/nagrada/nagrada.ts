import { Festival } from '../festival/festival';
import { Glumac } from '../glumac/glumac';

export class Nagrada {
    id: number;
    iznos: number;

    festivali: Array<Festival>;
    glumci: Array<Glumac>;
}
