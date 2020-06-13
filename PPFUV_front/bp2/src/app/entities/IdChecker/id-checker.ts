enum TypeChecker {
    ClanOrgOdb = 1,
    Festival,
    Forma,
    Glumac,
    Nagrada,
    OrgOdb,
    Pozoriste,
    Predstava,
    PropDeoFest,
    Radnik,
    Reditelj,
    Sala,
    Selektor,
    Ugovor
}

export class IdChecker {
    idChecker: number;
    type: number;

    constructor (idChecker: number, type: number) {
        this.idChecker = idChecker;
        this.type = type;
    }
}
