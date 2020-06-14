import { Festival } from '../festival/festival';
import { PropDeoFest } from '../prop-deo-fest/prop-deo-fest';
import { OrgOdb } from '../org-odb/org-odb';
import { Sala } from '../sala/sala';
import { Izabran } from '../izabran/izabran';

export class Pozoriste {
    id: number;
    brZaposlenih: number;
    naziv: string;
    
    // festivali: Array<Festival>;
    // propDeloviFest: Array<PropDeoFest>;
    orgOdb: OrgOdb;
    sale: Array<Sala>;

    // izabrani: Array<Izabran>;
}
