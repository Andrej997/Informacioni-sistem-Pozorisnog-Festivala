import { Component, OnInit } from '@angular/core';
import { Predstava } from 'src/app/entities/predstava/predstava';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-predstava',
  templateUrl: './create-predstava.component.html',
  styleUrls: ['./create-predstava.component.css']
})
export class CreatePredstavaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    naziv: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let predstava: Predstava = new Predstava();
    predstava.naziv = this.form.value.naziv;

    console.log(predstava);
  }

}
