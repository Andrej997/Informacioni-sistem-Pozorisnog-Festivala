import { ClanOrgOdb } from '../clan-org-odb/clan-org-odb';
import { Selektor } from '../selektor/selektor';
import { Pozoriste } from '../pozoriste/pozoriste';

export class OrgOdb {
    id: number;

    clanOrgOdbora1: ClanOrgOdb;
    clanOrgOdbora2: ClanOrgOdb;
    clanOrgOdbora3: ClanOrgOdb;

    selektor: Selektor;

    pozorista: Array<Pozoriste>;
}
