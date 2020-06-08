import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/entities/festival/festival';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Forma } from 'src/app/entities/forma/forma';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';

@Component({
  selector: 'app-create-festival',
  templateUrl: './create-festival.component.html',
  styleUrls: ['./create-festival.component.css']
})
export class CreateFestivalComponent implements OnInit {

  allPozorista: Array<Pozoriste> = new Array<Pozoriste>();
  allForma: Array<Forma> = new Array<Forma>();

  constructor(private httpService: HttpServiceService) { }

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
  }

  form = new FormGroup({
    pozoriste: new FormControl("", [Validators.required]),
    forma: new FormControl("", [Validators.required]),
    naziv: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    tema: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    brojPozorista: new FormControl(0,[Validators.required, Validators.min(1)]),
    budzet: new FormControl(0,[Validators.required, Validators.min(1)]),
    sponzor: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    pocetakOdrzavanja: new FormControl([Validators.required]),
    krajOdrzavanja: new FormControl([Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let festival: Festival = new Festival();
    festival.naziv = this.form.value.naziv;
    festival.brojPozorista = this.form.value.brojPozorista;

    console.log(festival);
  }

  onChange(event) {

  }

  onChangeForma(event) {

  }

}
