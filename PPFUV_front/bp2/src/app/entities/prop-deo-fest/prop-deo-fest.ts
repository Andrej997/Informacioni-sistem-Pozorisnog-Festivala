import { Pozoriste } from '../pozoriste/pozoriste';

export class PropDeoFest {
    id: number;
    naziv: string;
    vremeOdrzavanja: Date;

    pozorista: Array<Pozoriste>;
}
