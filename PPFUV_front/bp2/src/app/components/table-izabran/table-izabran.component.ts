import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';
import { Izabran } from 'src/app/entities/izabran/izabran';
import { Ugovor } from 'src/app/entities/ugovor/ugovor';
import { Festival } from 'src/app/entities/festival/festival';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Predstava } from 'src/app/entities/predstava/predstava';
import { Sala } from 'src/app/entities/sala/sala';

@Component({
  selector: 'app-table-izabran',
  templateUrl: './table-izabran.component.html',
  styleUrls: ['./table-izabran.component.css']
})
export class TableIzabranComponent implements OnInit {
  allIzabrani: Array<Izabran> = new Array<Izabran>();

  allUgovor: Array<Ugovor> = new Array<Ugovor>();

  allFestival: Array<Festival> = new Array<Festival>();

  allOrgOdb: Array<OrgOdb> = new Array<OrgOdb>();

  allPozoriste: Array<Pozoriste> = new Array<Pozoriste>();

  allPredstava: Array<Predstava> = new Array<Predstava>();

  allSala: Array<Sala> = new Array<Sala>();

  loading: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.loadAllIzabrani();
    this.loadAllUgovor();
    this.loadAllFestival();
    this.loadAllOrgOdb();
    this.loadAllPozoriste();
    this.loadAllPredstava();
    this.loadAllSala();
  }

  loadAllIzabrani() {
    this.loading = true;
    this.httpService.getAction('Izabran')
    .toPromise()
    .then(result => {
      this.allIzabrani = result as Izabran[];
      // console.log(this.allIzabrani)
      this.loading = false;
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  loadAllUgovor() {
    this.loading = true;
    this.httpService.getAction('Ugovor')
    .toPromise()
    .then(result => {
      this.allUgovor = result as Ugovor[];
      if (this.allUgovor.length > 0) {
        this.idUgovor = this.allUgovor[0].id;
      }
      this.loading = false;
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  loadAllFestival() {
    this.loading = true;
    this.httpService.getAction('Festival')
    .toPromise()
    .then(result => {
      this.allFestival = result as Festival[];
      // console.log(this.allFestival)
      this.loading = false;
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  loadAllOrgOdb() {
    this.loading = true;
    this.httpService.getAction('OrgOdb')
    .toPromise()
    .then(result => {
      this.allOrgOdb = result as OrgOdb[];
      this.loading = false;
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  loadAllPozoriste() {
    this.loading = true;
    this.httpService.getAction('Pozoriste')
    .toPromise()
    .then(result => {
      this.allPozoriste = result as Pozoriste[];
      this.loading = false;
      // console.log(this.allPozoriste)
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  loadAllPredstava() {
    this.loading = true;
    this.httpService.getAction('Predstava')
    .toPromise()
    .then(result => {
      this.allPredstava = result as Predstava[];
      // console.log(this.allPredstava)
      if (this.allPredstava.length > 0) {
        this.idPredstava = this.allPredstava[0].id;
      }
      this.loading = false;
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  loadAllSala() {
    this.loading = true;
    this.httpService.getAction('Sala')
    .toPromise()
    .then(result => {
      this.allSala = result as Sala[];
      this.loading = false;
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  idUgovor: number = 0;
  onSelectUgovor(event) {
    this.idUgovor = event;
    // console.log(this.idUgovor);
  }

  signIzabran(event) {
    let izabran = new Izabran();
    let id: number = Number.parseInt(event.target.id);
    for (let i = 0; i < this.allIzabrani.length; ++i) {
      if (this.allIzabrani[i].id == id) {
        izabran = this.allIzabrani[i];
        break;
      }
    }
    if (izabran.id != 0 && this.idUgovor > 0) {
      for (let i = 0; i < this.allUgovor.length; ++i) {
        if (this.allUgovor[i].id == this.idUgovor) {
          izabran.ugovor = this.allUgovor[i];
          break;
        }
      }
      // console.log(izabran)
      this.loading = true;
      this.httpService.putAction('Izabran', izabran).subscribe (
        res => { 
          this.loadAll();
          this.loading = false;
        },
        err => { 
          this.loading = false;
          console.log(err);
        });

      let organizacioniOdbor = new OrgOdb();
      for (let i = 0; i < this.allOrgOdb.length; ++i) {
        if (this.allOrgOdb[i].id == izabran.orgOdb.id) {
          organizacioniOdbor = this.allOrgOdb[i];
        }
      }

      let pozoriste = new Pozoriste();
      let breaked: boolean = false;
      for (let i = 0; i < this.allPozoriste.length; ++i) {
        for (let j = 0; j < organizacioniOdbor.pozorista.length; ++j) {
          if (this.allPozoriste[i].id == organizacioniOdbor.pozorista[j].id) {
            pozoriste = this.allPozoriste[i];
            breaked = true;
            break;
          }
        }
        if (breaked == true) {
          break;
        }
      }
      
      let festival = new Festival();
      for (let i = 0; i < this.allFestival.length; ++i) {
        if (this.allFestival[i].pozoriste.id == pozoriste.id) {
          festival = this.allFestival[i];
        }
      }
      if (festival.id > 0) {
        festival.ucesnici.push(izabran);
        this.loading = true;
        this.httpService.putAction('Festival', festival).subscribe (
          res => { 
            this.loading = false;
            this.loadAll();
          },
          err => { 
            this.loading = false;
            console.log(err);
          });
      }
    }
    
  }

  deleteIzabran(event) {
    let id: number = Number.parseInt(event.target.id);
    this.loading = true;
    this.httpService.deleteAction("Izabran", "DeleteIzabran", id).toPromise()
      .then(result => {
        this.loadAllIzabrani();
      })
      .catch(
        err => {
          this.loading = false;
          console.log(err);
        });
  }

  idPredstava: number = 0;
  onSelectPredstava(event) {
    this.idPredstava = event;
    console.log(this.idPredstava);
  }

  errorPredstava: boolean = false;
  errorPredstavaText: string = "";
  addPredstava(event) {
    let id: number = Number.parseInt(event.target.id);
    // console.log(id);
    let izabran = new Izabran();
    for (let i = 0; i < this.allIzabrani.length; ++i) {
      if (this.allIzabrani[i].id == id) {
        izabran = this.allIzabrani[i];
        break;
      }
    }
    let pozoristeVecIma: boolean = false;
    for (let i = 0; i < this.allPredstava.length; ++i) {
      if (this.allPredstava[i].izabran != null) {
        if (this.allPredstava[i].izabran.id == izabran.id) {
          pozoristeVecIma = true;
          break;
        }
      }
    }
    if (pozoristeVecIma == true) {
      this.errorPredstava = true;
      this.errorPredstavaText = "To pozoriste vec ima predstavu!";
      return;
    }
    console.log(izabran);
    if (izabran.id != 0 && this.idUgovor > 0) {
      let predstava: Predstava = new Predstava();
      for (let i = 0; i < this.allPredstava.length; ++i) {
        if (this.allPredstava[i].id == this.idPredstava) {
          predstava = this.allPredstava[i];
          break;
        }
      }
      if (predstava.izabran != null) {
        this.errorPredstava = true;
        this.errorPredstavaText = "Predstava je zauzeta!";
        return;
      }
      this.errorPredstava = false;
      predstava.izabran = izabran;
      // console.log(predstava);
      this.loading = true;
      this.httpService.putAction('Predstava', predstava).subscribe (
        res => { 
          let sala = new Sala();
          for (let i = 0; i < this.allSala.length; ++i) {
            if (this.allSala[i].id == izabran.pozoriste.sale[0].id) {
              sala = this.allSala[i];
              break;
            }
          }
          sala.predstave.push(predstava);
          this.httpService.putAction('Sala', sala).subscribe (
            res => { 
              this.loadAll();
              this.loading = false;
            },
            err => { 
              this.loading = false;
              console.log(err);
            });
        },
        err => { 
          this.loading = false;
          console.log(err);
        });
    }
  }
}
