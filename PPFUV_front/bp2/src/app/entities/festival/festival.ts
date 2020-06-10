import { Forma } from '../forma/forma';
import { Pozoriste } from '../pozoriste/pozoriste';
import { Nagrada } from '../nagrada/nagrada';
import { Radnik } from '../radnik/radnik';

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
    
    nagrade: Array<Nagrada>;
    radnici: Array<Radnik>;
}
