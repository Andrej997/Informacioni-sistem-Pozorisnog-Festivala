import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/entities/festival/festival';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Forma } from 'src/app/entities/forma/forma';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-festival',
  templateUrl: './create-festival.component.html',
  styleUrls: ['./create-festival.component.css']
})
export class CreateFestivalComponent implements OnInit {
  id: number = 0;
  festival: Festival;
  change: boolean = false;

  allPozorista: Array<Pozoriste> = new Array<Pozoriste>();
  allForma: Array<Forma> = new Array<Forma>();

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Festival", this.id).toPromise()
          .then(result => {
            this.festival = result as Festival;
            this.form.setValue({
              id: this.festival.id,
              pozoriste: this.festival.pozoriste.naziv,
              forma: this.festival.forma.naziv,
              naziv: this.festival.naziv,
              tema: this.festival.tema,
              brojPozorista: this.festival.brojPozorista,
              budzet: this.festival.budzet,
              sponzor: this.festival.sponzor,
              pocetakOdrzavanja: this.festival.pocetakOdrzavanja,
              krajOdrzavanja: this.festival.krajOdrzavanja,
            });
            this.form.controls["pozoriste"].setValidators([]);
            this.form.controls["pozoriste"].updateValueAndValidity(); 
            this.form.controls["forma"].setValidators([]);
            this.form.controls["forma"].updateValueAndValidity();
            this.change = true;
            this.showSubmit = true;
          })
          .catch(
            err => {
              console.log(err)
            });
    }
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

  this.httpService.getAction('Forma')
    .toPromise()
    .then(result => {
      this.allForma = result as Forma[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  form = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.max(10000), Validators.min(1)]),
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

  checkerActivated: boolean = false;
  checkText: string = "";
  showSubmit: boolean = false;
  checkId() {
    let intVal = Number.parseInt(this.form.value.id);
    let type: number = 2;
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
    let festival: Festival = new Festival();
    festival.id = this.form.value.id;
    festival.naziv = this.form.value.naziv;
    for (let i = 0; i < this.allPozorista.length; ++i) {
      if (this.allPozorista[i].id == this.form.value.pozoriste) {
        festival.pozoriste = this.allPozorista[i];
        break;
      }
    }
    for (let i = 0; i < this.allForma.length; ++i) {
      if (this.allForma[i].id == this.form.value.forma) {
        festival.forma = this.allForma[i];
        break;
      }
    }
    festival.tema = this.form.value.tema;
    festival.budzet = this.form.value.budzet;
    festival.sponzor = this.form.value.sponzor;
    festival.pocetakOdrzavanja = this.form.value.pocetakOdrzavanja;
    festival.krajOdrzavanja = this.form.value.krajOdrzavanja;
    festival.brojPozorista = this.form.value.brojPozorista;

    if (this.change == true) {
      festival.id = this.festival.id;
      if (this.form.value.pozoriste == this.festival.pozoriste.naziv)
        festival.pozoriste = this.festival.pozoriste;
      if (this.form.value.forma == this.festival.forma.naziv)
        festival.forma = this.festival.forma;
      this.httpService.putAction('Festival', festival).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableFestival']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('Festival', 'AddFestival', festival).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableFestival']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(festival);
  }

  onChange(event) {

  }

  onChangeForma(event) {

  }

}
