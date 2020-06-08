import { Component, OnInit } from '@angular/core';
import { PropDeoFest } from 'src/app/entities/prop-deo-fest/prop-deo-fest';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-prop-deo-fest',
  templateUrl: './create-prop-deo-fest.component.html',
  styleUrls: ['./create-prop-deo-fest.component.css']
})
export class CreatePropDeoFestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    naziv: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    vremeOdrzavanja: new FormControl([Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let propDeoFest: PropDeoFest = new PropDeoFest();
    propDeoFest.naziv = this.form.value.naziv;
    propDeoFest.vremeOdrzavanja = this.form.value.vremeOdrzavanja;

    console.log(propDeoFest);
  }

}
