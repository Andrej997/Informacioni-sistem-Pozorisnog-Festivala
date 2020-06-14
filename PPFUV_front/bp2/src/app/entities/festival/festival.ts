import { Forma } from '../forma/forma';
import { Pozoriste } from '../pozoriste/pozoriste';
import { Nagrada } from '../nagrada/nagrada';
import { Radnik } from '../radnik/radnik';
import { Izabran } from '../izabran/izabran';

export class Festival {
    id: number;
    naziv: string;
    tema: string;
    pocetakOdrzavanja: Date;
    krajOdrzavanja: Date;
    sponzor: string;
    brojPozorista: number; //* broj koji prima
    forma: Forma;
    budzet: number;
    pozoriste: Pozoriste;

    ucesnici: Array<Izabran>;
    
    nagrade: Array<Nagrada>;
    radnici: Array<Radnik>;
}
