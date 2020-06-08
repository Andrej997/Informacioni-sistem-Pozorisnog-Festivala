import { Reditelj } from '../reditelj/reditelj';
import { Glumac } from '../glumac/glumac';

export class Predstava {
    id: number;
    naziv: string;

    reditelji: Array<Reditelj>;
    glumci: Array<Glumac>;
}
