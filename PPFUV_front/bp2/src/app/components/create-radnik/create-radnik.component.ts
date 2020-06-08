import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Radnik } from 'src/app/entities/radnik/radnik';

@Component({
  selector: 'app-create-radnik',
  templateUrl: './create-radnik.component.html',
  styleUrls: ['./create-radnik.component.css']
})
export class CreateRadnikComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    ime: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    prezime: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    tr: new FormControl("",[Validators.required]),
    brPredstava: new FormControl(0, [Validators.required, Validators.min(1)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let radnik: Radnik = new Radnik();
    radnik.ime = this.form.value.ime;
    radnik.prezime = this.form.value.prezime;

    console.log(radnik);
  }

  labelaRadnika: string = "";
  izbor: number = 5;
  onChange(event) {
    this.izbor = event;
    if (event == 1) { // * izabran selektor
      this.labelaRadnika = "Broj predstava koje je odgledao selektor";
      this.form.controls["brPredstava"].setValidators([Validators.required, Validators.min(1)]); 
      this.form.controls["brPredstava"].updateValueAndValidity();
    }
    else if (event == 2) { // * izabran clan org odbora
      this.form.controls["brPredstava"].setValidators([]); //! menjamo validator za brPredstava jer ne mora da ga unosi
      this.form.controls["brPredstava"].updateValueAndValidity();
    }
    else if (event == 3) { // * izabran glumac
      this.labelaRadnika = "Broj predstava u koje glumi glumac";
      this.form.controls["brPredstava"].setValidators([Validators.required, Validators.min(1)]); 
      this.form.controls["brPredstava"].updateValueAndValidity();
    }
    else if (event == 4) { // * izabran reditelj
      this.labelaRadnika = "Broj predstava koje je realizovao reditelj";
      this.form.controls["brPredstava"].setValidators([Validators.required, Validators.min(1)]); 
      this.form.controls["brPredstava"].updateValueAndValidity();
    }
    else if (event == 5) { // * izabran clan org odbora
      this.form.controls["brPredstava"].setValidators([]); //! menjamo validator za brPredstava jer ne mora da ga unosi
      this.form.controls["brPredstava"].updateValueAndValidity();
    }
  }

}
