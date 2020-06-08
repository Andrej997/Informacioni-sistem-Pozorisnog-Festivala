import { Radnik } from '../radnik/radnik';
import { Predstava } from '../predstava/predstava';

export class Glumac extends Radnik {
    brPredstava: number;

    predstave: Array<Predstava>;
}
