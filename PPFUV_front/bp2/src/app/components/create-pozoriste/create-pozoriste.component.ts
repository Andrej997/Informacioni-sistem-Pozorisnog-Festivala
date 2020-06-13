import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Sala } from 'src/app/entities/sala/sala';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-pozoriste',
  templateUrl: './create-pozoriste.component.html',
  styleUrls: ['./create-pozoriste.component.css']
})
export class CreatePozoristeComponent implements OnInit {
  id: number = 0;
  pozoriste: Pozoriste;
  change: boolean = false;

  allSala: Array<Sala> = new Array<Sala>();

  error: boolean = false;
  errorText: string = "";

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Pozoriste", this.id).toPromise()
          .then(result => {
            this.pozoriste = result as Pozoriste;
            this.form.setValue({
              id: this.pozoriste.id,
              naziv: this.pozoriste.naziv,
              brZaposlenih: this.pozoriste.brZaposlenih,
              sala: this.pozoriste.sale[0].id
            })
            this.form.controls["sala"].setValidators([]);
            this.form.controls["sala"].updateValueAndValidity(); 
            this.change = true;
            this.showSubmit = true;
          })
          .catch(
            err => {
              console.log(err)
            });
    }

    this.httpService.getAction("Sala").toPromise()
      .then(result => {
        this.allSala = result as Sala[];
      })
      .catch(
        err => {
          console.log(err)
        });
  }

  form = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.max(10000), Validators.min(1)]),
    naziv: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    brZaposlenih: new FormControl(0,[Validators.required, Validators.min(1)]),
    sala: new FormControl("",[Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  checkerActivated: boolean = false;
  checkText: string = "";
  showSubmit: boolean = false;
  checkId() {
    let intVal = Number.parseInt(this.form.value.id);
    let type: number = 7;
    let idChecker: IdChecker = new IdChecker(intVal, type);

    this.httpService.postAction('IdChecker', 'Check', idChecker).subscribe(
      res => { 
        this.showSubmit = true;
        this.checkerActivated = true;
        this.checkText = "Id is free!"
      },
      err => { 
        console.log(err);
        this.showSubmit = false;
        this.checkerActivated = true;
        this.checkText = "Id is not free!"
      }
    );
  }

  submit() {
    let pozoriste: Pozoriste = new Pozoriste();
    pozoriste.naziv = this.form.value.naziv;
    pozoriste.id = this.form.value.id;
    pozoriste.brZaposlenih = this.form.value.brZaposlenih;

    if (this.change == true) {
      pozoriste.id = this.pozoriste.id;
      pozoriste.sale = this.pozoriste.sale;
      this.httpService.putAction('Pozoriste', pozoriste).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tablePozoriste']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      pozoriste.sale = new Array<Sala>();
      this.allSala.forEach(element => {
        if (this.form.value.sala == element.id && element.zauzeta == false) {
          pozoriste.sale.push(element);
        }
      });
      if (pozoriste.sale.length > 0) {
        this.error = false;
        this.httpService.postAction('Pozoriste', 'AddPozoriste', pozoriste).subscribe(
          res => { 
            let pozoriste = res as Pozoriste;
            pozoriste.sale[0].zauzeta = true;
            this.httpService.putAction('Sala', pozoriste.sale[0]).subscribe (
              res => { 
                this.form.reset(); 
                this.router.navigate(['/tablePozoriste']);
              },
              err => { 
                console.log(err);
              });
            this.form.reset(); 
            this.router.navigate(['/tablePozoriste']);
          },
          err => { 
            console.log(err);
          });
      }
      else {
        this.error = true;
        this.errorText = "Ta sala je zauzeta!";
      }
    }

    console.log(pozoriste);
  }

}
