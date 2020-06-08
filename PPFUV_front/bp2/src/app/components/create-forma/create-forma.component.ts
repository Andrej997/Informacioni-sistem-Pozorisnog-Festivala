import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Forma } from 'src/app/entities/forma/forma';

@Component({
  selector: 'app-create-forma',
  templateUrl: './create-forma.component.html',
  styleUrls: ['./create-forma.component.css']
})
export class CreateFormaComponent implements OnInit {

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
    let forma: Forma = new Forma();
    forma.naziv = this.form.value.naziv;

    console.log(forma);
  }
}
