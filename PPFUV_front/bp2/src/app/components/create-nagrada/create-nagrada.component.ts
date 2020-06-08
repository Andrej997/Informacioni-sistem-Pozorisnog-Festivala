import { Component, OnInit } from '@angular/core';
import { Nagrada } from 'src/app/entities/nagrada/nagrada';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-nagrada',
  templateUrl: './create-nagrada.component.html',
  styleUrls: ['./create-nagrada.component.css']
})
export class CreateNagradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    iznos: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let nagrada: Nagrada = new Nagrada();
    nagrada.iznos = this.form.value.iznos;

    console.log(nagrada);
  }

}
