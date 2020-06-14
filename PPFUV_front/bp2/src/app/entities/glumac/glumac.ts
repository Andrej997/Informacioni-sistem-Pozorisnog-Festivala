import { Radnik } from '../radnik/radnik';
import { Predstava } from '../predstava/predstava';
import { Nagrada } from '../nagrada/nagrada';

export class Glumac extends Radnik {
    brPredstava: number;

    predstave: Array<Predstava>;

    nagrada: Nagrada;
}
