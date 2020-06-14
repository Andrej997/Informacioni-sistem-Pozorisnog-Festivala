import { OrgOdb } from '../org-odb/org-odb';
import { Pozoriste } from '../pozoriste/pozoriste';
import { Ugovor } from '../ugovor/ugovor';
import { Nagrada } from '../nagrada/nagrada';

export class Izabran {
    id: number;
    // orgOdbId: number;
    orgOdb: OrgOdb;
    // pozoristeId: number;
    pozoriste: Pozoriste;

    ugovor: Ugovor;

    datumSklapanja: Date;

    nagrada: Nagrada;
}
