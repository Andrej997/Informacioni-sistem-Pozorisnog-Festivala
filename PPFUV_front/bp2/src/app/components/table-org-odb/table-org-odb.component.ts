import { Component, OnInit } from '@angular/core';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Festival } from 'src/app/entities/festival/festival';
import { Izabran } from 'src/app/entities/izabran/izabran';

@Component({
  selector: 'app-table-org-odb',
  templateUrl: './table-org-odb.component.html',
  styleUrls: ['./table-org-odb.component.css']
})
export class TableOrgOdbComponent implements OnInit {
  allOrgOdb: Array<OrgOdb> = new Array<OrgOdb>();

  allPozorista: Array<Pozoriste> = new Array<Pozoriste>();

  allFestival: Array<Festival> = new Array<Festival>();

  allIzabran: Array<Izabran> = new Array<Izabran>();
  

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.loadAllPozoriste();
    this.loadAllOrgOdb();
    this.loadAllFestival();
    this.loadAllIzabrani();
  }

  loadAllOrgOdb() {
    this.httpService.getAction('OrgOdb')
    .toPromise()
    .then(result => {
      this.allOrgOdb = result as OrgOdb[];
      console.log(this.allOrgOdb);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadAllPozoriste() {
    // this.loading = true;
    this.httpService.getAction('Pozoriste')
    .toPromise()
    .then(result => {
      // this.loading = false;
      this.allPozorista = result as Pozoriste[];
      console.log(this.allPozorista);
    })
    .catch(
      err => {
        // this.loading = false;
        console.log(err)
      });
  }

  loadAllFestival() {
    // this.loading = true;
    this.httpService.getAction('Festival')
    .toPromise()
    .then(result => {
      // this.loading = false;
      this.allFestival = result as Festival[];
      // console.log(this.allFestival);
    })
    .catch(
      err => {
        // this.loading = false;
        console.log(err)
      });
  }

  loadAllIzabrani() {
    this.httpService.getAction('Izabran')
    .toPromise()
    .then(result => {
      // this.loading = false;
      this.allIzabran = result as Izabran[];
      console.log(this.allIzabran);
    })
    .catch(
      err => {
        // this.loading = false;
        console.log(err)
      });
  }

  changeOrgOdb(event) {
    this.router.navigate(['/createOrgOdb/' + event.target.id]);
  }

  deleteOrgOdb(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("OrgOdb", "DeleteOrgOdb", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

  idAddUcesnik: number = 0;
  errorUcesnik: boolean = false;
  addUcesnik: boolean = false;
  errorText: string = "";

  formUcesnik = new FormGroup({
    ucesnik: new FormControl("",[Validators.required]),
  });

  get fUcesnik(){
    return this.formUcesnik.controls;
  }

  addUcesnikBtn(event) {
    this.idAddUcesnik = Number.parseInt(event.target.id);
    this.addUcesnik = true;
  }

  submitUcesnik() {
    let idAddUcesnik = Number.parseInt(this.formUcesnik.value.ucesnik);
    for (let i = 0; i < this.allIzabran.length; i++) {
      if (this.allIzabran[i].pozoriste.id == idAddUcesnik && this.allIzabran[i].orgOdb.id == this.idAddUcesnik) {
        this.errorUcesnik = true;
        this.formUcesnik.reset();
        this.errorText = "Taj organizacioni odbor je odabrato to pozoriste!";
        return;
      }
    }
    // console.log(this.idAddUcesnik);
    let organizacioniOdbor: OrgOdb = new OrgOdb();
    for (let i = 0; i < this.allOrgOdb.length; i++) {
      if (this.allOrgOdb[i].id == this.idAddUcesnik) {
        organizacioniOdbor = this.allOrgOdb[i];
        break;
      }
    }
    let pozoriste = new Pozoriste();
    
    for (let i = 0; i < this.allPozorista.length; i++) {
      if (this.allPozorista[i].id == idAddUcesnik) {
        pozoriste = this.allPozorista[i];
      }
    }
    console.log(idAddUcesnik);
    if (organizacioniOdbor.pozorista.length == 0) {
      this.errorUcesnik = true;
      this.formUcesnik.reset();
      this.errorText = "Taj orgzanizacioni odbor nije odabran od nijednog pozorista!";
      return;
    }
    else {
      this.errorUcesnik = false;
    }
    
    let izabran = new Izabran();
    izabran.orgOdb = organizacioniOdbor;
    izabran.pozoriste = pozoriste;
    console.log(izabran);
    this.httpService.postAction('Izabran', 'AddIzabran', izabran).subscribe(
      res => { 
        this.errorUcesnik = false;
        this.formUcesnik.reset();
        this.loadAll();
        this.addUcesnik = false;
      },
      err => { 
        console.log(err);
      }
    );
  }
}
