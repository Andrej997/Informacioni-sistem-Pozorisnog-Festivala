import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sala } from 'src/app/entities/sala/sala';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';

@Component({
  selector: 'app-table-pozoriste',
  templateUrl: './table-pozoriste.component.html',
  styleUrls: ['./table-pozoriste.component.css']
})
export class TablePozoristeComponent implements OnInit {

  allPozorista: Array<Pozoriste> = new Array<Pozoriste>();

  addSala: boolean = false;
  idAddSala: number = 0;

  allSala: Array<Sala> = new Array<Sala>();

  allOrgOdb: Array<OrgOdb> = new Array<OrgOdb>();

  error: boolean = false;
  errorText: string = "";

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllPozoriste();

      this.httpService.getAction("OrgOdb").toPromise()
      .then(result => {
        this.allOrgOdb = result as OrgOdb[];
        // console.log(this.allOrgOdb)
      })
      .catch(
        err => {
          console.log(err)
        });

    this.loadAllSala();
  }

  loadAllSala() {
    this.httpService.getAction("Sala").toPromise()
      .then(result => {
        this.allSala = result as Sala[];
      })
      .catch(
        err => {
          console.log(err)
        });
  }

  loadAllPozoriste() {
    this.httpService.getAction('Pozoriste')
    .toPromise()
    .then(result => {
      this.allPozorista = result as Pozoriste[];
      // console.log(this.allPozorista);
    })
    .catch(
      err => {
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
