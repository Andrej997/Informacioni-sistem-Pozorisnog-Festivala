import { Component, OnInit } from '@angular/core';
import { Ugovor } from 'src/app/entities/ugovor/ugovor';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-ugovor',
  templateUrl: './create-ugovor.component.html',
  styleUrls: ['./create-ugovor.component.css']
})
export class CreateUgovorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    svota: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    datumSklapanja: new FormControl([Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let ugovor: Ugovor = new Ugovor();
    ugovor.svota = this.form.value.svota;
    ugovor.datumSklapanja = this.form.value.datumSklapanja;

    console.log(ugovor);
  }

}
