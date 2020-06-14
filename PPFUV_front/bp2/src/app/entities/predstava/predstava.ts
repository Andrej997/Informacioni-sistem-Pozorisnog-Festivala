import { Reditelj } from '../reditelj/reditelj';
import { Glumac } from '../glumac/glumac';
import { Izabran } from '../izabran/izabran';

export class Predstava {
    id: number;
    naziv: string;

    izabran: Izabran;

    reditelji: Array<Reditelj>;
    glumci: Array<Glumac>;
}
