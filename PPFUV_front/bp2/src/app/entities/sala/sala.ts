import { Predstava } from '../predstava/predstava';

export class Sala {
    id: number;
    kapacPublike: number;

    zauzeta: boolean;

    predstave: Array<Predstava>;
}
