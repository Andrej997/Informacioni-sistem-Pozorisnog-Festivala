import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/entities/sala/sala';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sala',
  templateUrl: './create-sala.component.html',
  styleUrls: ['./create-sala.component.css']
})
export class CreateSalaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    kapacPublike: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let forma: Sala = new Sala();
    forma.kapacPublike = this.form.value.kapacPublike;

    console.log(forma);
  }

}
