import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sala } from 'src/app/entities/sala/sala';

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

  error: boolean = false;
  errorText: string = "";

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Pozoriste')
    .toPromise()
    .then(result => {
      this.allPozorista = result as Pozoriste[];
      //console.log(this.allAeroplanes);
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

}
