import { Radnik } from '../radnik/radnik';
import { Predstava } from '../predstava/predstava';

export class Reditelj extends Radnik {
    brPredstava: number;

    predstave: Array<Predstava>;
}
