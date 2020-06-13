import { ClanOrgOdb } from '../clan-org-odb/clan-org-odb';
import { Selektor } from '../selektor/selektor';
import { Pozoriste } from '../pozoriste/pozoriste';

export class OrgOdb {
    id: number;

    clanoviOrgOdbora: Array<ClanOrgOdb>;
    selektor: Selektor;

    pozorista: Array<Pozoriste>;
}
