import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sala } from 'src/app/entities/sala/sala';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';
import { Festival } from 'src/app/entities/festival/festival';

@Component({
  selector: 'app-table-pozoriste',
  templateUrl: './table-pozoriste.component.html',
  styleUrls: ['./table-pozoriste.component.css']
})
export class TablePozoristeComponent implements OnInit {
  loading: boolean = false;

  allPozorista: Array<Pozoriste> = new Array<Pozoriste>();

  addSala: boolean = false;
  idAddSala: number = 0;

  allSala: Array<Sala> = new Array<Sala>();

  allOrgOdb: Array<OrgOdb> = new Array<OrgOdb>();

  allFestival: Array<Festival> = new Array<Festival>();

  error: boolean = false;
  errorText: string = "";

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.loadAllPozoriste();

      this.httpService.getAction("OrgOdb").toPromise()
      .then(result => {
        this.allOrgOdb = result as OrgOdb[];
        // console.log(this.allOrgOdb)
        this.loading = false;
      })
      .catch(
        err => {
          this.loading = false;
          console.log(err)
        });

    this.loadAllSala();
    this.loadAllFestival();
  }

  loadAllSala() {
    this.loading = true;
    this.httpService.getAction("Sala").toPromise()
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

  loadAllPozoriste() {
    this.loading = true;
    this.httpService.getAction('Pozoriste')
    .toPromise()
    .then(result => {
      this.loading = false;
      this.allPozorista = result as Pozoriste[];
      // console.log(this.allPozorista);
    })
    .catch(
      err => {
        this.loading = false;
        console.log(err)
      });
  }

  loadAllFestival() {
    this.loading = true;
    this.httpService.getAction("Festival").toPromise()
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

  changePozoriste(event) {
    this.router.navigate(['/createPozoriste/' + event.target.id]);
  }

  deletePozoriste(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Pozoriste", "DeletePozoriste", id).toPromise()
      .then(result => {
        
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

  formSala = new FormGroup({
    sala: new FormControl("",[Validators.required]),
  });

  get fSala(){
    return this.formSala.controls;
  }

  addSalaBtn(event) {
    this.idAddSala = Number.parseInt(event.target.id);
    this.addSala = true;
  }

  submitSala() {
    let pozoriste: Pozoriste = new Pozoriste();
    for (let i = 0; i < this.allPozorista.length; i++) {
      if (this.allPozorista[i].id == this.idAddSala) {
        pozoriste = this.allPozorista[i];
        break;
      }
    }
    let pozoristeBrSala = pozoriste.sale.length;
    this.allSala.forEach(element => {
      if (this.formSala.value.sala == element.id && element.zauzeta == false) {
        pozoriste.sale.push(element);
      }
    });
    if (pozoristeBrSala == pozoriste.sale.length) {
      this.error = true;
      this.errorText = "Ta sala je zauzeta!";
    }
    else {
      this.error = false;
      this.httpService.putAction('Pozoriste', pozoriste).subscribe (
        res => { 
          let sala = pozoriste.sale[pozoriste.sale.length - 1];
          sala.zauzeta = true;
          this.httpService.putAction('Sala', sala).subscribe (
            res => { 
              this.loadAllSala();
            },
            err => { 
              console.log(err);
            });
        },
        err => { 
          console.log(err);
        });
    }
    
  }

  idAddOrgOdb: number = 0;
  errorOrgOdb: boolean = false;
  addOrgOdb: boolean = false;

  formOrgOdb = new FormGroup({
    orgOdb: new FormControl("",[Validators.required]),
  });

  get fOrgOdb(){
    return this.formOrgOdb.controls;
  }

  addOrgOdbBtn(event) {
    this.idAddOrgOdb = Number.parseInt(event.target.id);
    this.addOrgOdb = true;
  }

  submitOrgOdb() {
    let foundPozoriste: boolean = false;
    for (let i = 0; i < this.allFestival.length; i++) {
      if (this.allFestival[i].pozoriste.id == this.idAddOrgOdb) {
        foundPozoriste = true;
        break;
      }
    }
    if (foundPozoriste == false) {
      this.errorOrgOdb = true;
      this.formOrgOdb.reset();
      this.errorText = "To pozoriste nema festival, stoga ne moze da odabere organizacioni odbor!";
      return;
    }
    let pozoriste: Pozoriste = new Pozoriste();
    for (let i = 0; i < this.allPozorista.length; i++) {
      if (this.allPozorista[i].id == this.idAddOrgOdb) {
        pozoriste = this.allPozorista[i];
        break;
      }
    }

    let organizacioniOdbor: OrgOdb = new OrgOdb();
    for (let i = 0; i < this.allOrgOdb.length; i++) {
      for (let j = 0; j < this.allOrgOdb[i].pozorista.length; j++) {
        if (this.allOrgOdb[i].pozorista[j].id == this.idAddOrgOdb) {
          pozoriste.orgOdb = this.allOrgOdb[i];
          organizacioniOdbor = this.allOrgOdb[i];
          break;
        }
      }
    }
    if (pozoriste.orgOdb != null) {
        this.errorOrgOdb = true;
        this.formOrgOdb.reset();
        this.errorText = "Vec postoji organizacioni odbor!";
    }
    else {
      for (let i = 0; i < this.allOrgOdb.length; i++) {
        if (this.allOrgOdb[i].id == this.formOrgOdb.value.orgOdb) {
          organizacioniOdbor = this.allOrgOdb[i];
        }
      }
      // organizacioniOdbor.pozorista = new Array<Pozoriste>();
      organizacioniOdbor.pozorista.push(pozoriste);
      // console.log("Nema");
      this.errorOrgOdb = false;
      this.httpService.putAction('OrgOdb', organizacioniOdbor).subscribe (
        res => { 
          this.loadAllPozoriste();
        },
        err => { 
          console.log(err);
        });
    }
  }

}
