import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Radnik } from 'src/app/entities/radnik/radnik';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Selektor } from 'src/app/entities/selektor/selektor';
import { ClanOrgOdb } from 'src/app/entities/clan-org-odb/clan-org-odb';
import { Glumac } from 'src/app/entities/glumac/glumac';
import { Reditelj } from 'src/app/entities/reditelj/reditelj';

@Component({
  selector: 'app-create-radnik',
  templateUrl: './create-radnik.component.html',
  styleUrls: ['./create-radnik.component.css']
})
export class CreateRadnikComponent implements OnInit {
  id: number = 0;
  radnik: Radnik;
  selektor: Selektor;
  clanOrgOdb: ClanOrgOdb;
  glumac: Glumac;
  reditelj: Reditelj;
  change: boolean = false;
  uloga: string = "";

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.route.params.subscribe(params => { this.uloga = params['uloga']; });
    //console.log(this.uloga)
    if (this.id != 0 && this.id != undefined) {
      this.form.controls["tr"].setValidators([]);
      this.form.controls["tr"].updateValueAndValidity(); 
      if (this.uloga == "selektor") {
        this.httpService.getIdAction("Selektor", this.id).toPromise()
        .then(result => {
          this.selektor = result as Selektor;
          this.form.setValue({
            ime: this.selektor.ime,
            prezime: this.selektor.prezime,
            tr: "",
            brPredstava: this.selektor.brOgledanihSerija,
          })
          this.izbor = 1;
          this.change = true;
        })
        .catch(
          err => {
            console.log(err)
          });
      }
      if (this.uloga == "clanOdbOrg") {
        this.httpService.getIdAction("ClanOrgOdb", this.id).toPromise()
        .then(result => {
          this.clanOrgOdb = result as ClanOrgOdb;
          this.form.setValue({
            ime: this.clanOrgOdb.ime,
            prezime: this.clanOrgOdb.prezime,
            tr: "",
            brPredstava: 0,
          })
          this.change = true;
          this.izbor = 2;
          this.form.controls["brPredstava"].setValidators([]);
          this.form.controls["brPredstava"].updateValueAndValidity(); 
        })
        .catch(
          err => {
            console.log(err)
          });
      }
      if (this.uloga == "glumac") {
        this.httpService.getIdAction("Glumac", this.id).toPromise()
        .then(result => {
          this.glumac = result as Glumac;
          this.form.setValue({
            ime: this.glumac.ime,
            prezime: this.glumac.prezime,
            tr: "",
            brPredstava: this.glumac.brPredstava,
          })
          this.change = true;
          this.izbor = 3;
        })
        .catch(
          err => {
            console.log(err)
          });
      }
      if (this.uloga == "reditelj") {
        this.httpService.getIdAction("Reditelj", this.id).toPromise()
        .then(result => {
          this.reditelj = result as Reditelj;
          this.form.setValue({
            ime: this.reditelj.ime,
            prezime: this.reditelj.prezime,
            tr: "",
            brPredstava: this.reditelj.brPredstava,
          })
          this.change = true;
          this.izbor = 4;
        })
        .catch(
          err => {
            console.log(err)
          });
      }
      if (this.uloga == "other") {
        this.httpService.getIdAction("Radnik", this.id).toPromise()
        .then(result => {
          this.radnik = result as Radnik;
          this.form.setValue({
            ime: this.radnik.ime,
            prezime: this.radnik.prezime,
            tr: "",
            brPredstava: 0,
          })
          this.change = true;
          this.izbor = 5;
          this.form.controls["brPredstava"].setValidators([]);
          this.form.controls["brPredstava"].updateValueAndValidity(); 
        })
        .catch(
          err => {
            console.log(err)
          });
      }
        
    }
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
    let selektor: Selektor = new Selektor();
    let clanOrgOdb: ClanOrgOdb = new ClanOrgOdb();
    let glumac: Glumac = new Glumac();
    let reditelj: Reditelj = new Reditelj();
    let radnik: Radnik = new Radnik();
    if (this.izbor == 1) {
      selektor.ime = this.form.value.ime;
      selektor.prezime = this.form.value.prezime;
      selektor.brOgledanihSerija = this.form.value.brPredstava;
    }
    if (this.izbor == 2) {
      clanOrgOdb.ime = this.form.value.ime;
      clanOrgOdb.prezime = this.form.value.prezime;
    }
    if (this.izbor == 3) {
      glumac.ime = this.form.value.ime;
      glumac.prezime = this.form.value.prezime;
      glumac.brPredstava = this.form.value.brPredstava;
    }
    if (this.izbor == 4) {
      reditelj.ime = this.form.value.ime;
      reditelj.prezime = this.form.value.prezime;
      reditelj.brPredstava = this.form.value.brPredstava;
    }
    if (this.izbor == 5) {
      radnik.ime = this.form.value.ime;
      radnik.prezime = this.form.value.prezime;
    }

    if (this.change == true) {
      if (this.uloga == "selektor") {
        selektor.id = this.selektor.id;
        this.putMethod("Selektor", selektor);
      }
      if (this.uloga == "clanOdbOrg") {
        clanOrgOdb.id = this.clanOrgOdb.id;
        this.putMethod("ClanOrgOdb", clanOrgOdb);
      }
      if (this.uloga == "glumac") {
        glumac.id = this.glumac.id;
        this.putMethod("Glumac", glumac);
      }
      if (this.uloga == "reditelj") {
        reditelj.id = this.reditelj.id;
        this.putMethod("Reditelj", reditelj);
      }
      if (this.uloga == "other") {
        radnik.id = this.radnik.id;
        this.putMethod("Radnik", radnik);
      }
      // radnik.id = this.radnik.id;
      // this.httpService.putAction('Radnik', radnik).subscribe (
      //   res => { 
      //     this.form.reset(); 
      //     this.router.navigate(['/tableRadnik']);
      //   },
      //   err => { 
      //     console.log(err);
      //   });
    }
    else {
      if (this.izbor == 1) {
        this.postMethod("Selektor", selektor);
      }
      if (this.izbor == 2) {
        this.postMethod("ClanOrgOdb", clanOrgOdb);
      }
      if (this.izbor == 3) {
        this.postMethod("Glumac", glumac);
      }
      if (this.izbor == 4) {
        this.postMethod("Reditelj", reditelj);
      }
      if (this.izbor == 5) {
        this.postMethod("Radnik", radnik);
      }
      // this.httpService.postAction('Radnik', 'AddRadnik', radnik).subscribe(
      //   res => { 
      //     this.form.reset(); 
      //     this.router.navigate(['/tableRadnik']);
      //   },
      //   err => { 
      //     console.log(err);
      //   }
      // );
    }

    //console.log(radnik);
  }

  private postMethod(controllerName: string, model: any): void {
    this.httpService.postAction(controllerName, 'Add'+controllerName, model).subscribe(
      res => { 
        this.form.reset(); 
        this.router.navigate(['/tableRadnik']);
      },
      err => { 
        console.log(err);
      }
    );
  }

  private putMethod(controllerName: string, model: any): void {
    this.httpService.putAction(controllerName, model).subscribe (
      res => { 
        this.form.reset(); 
        this.router.navigate(['/tableRadnik']);
      },
      err => { 
        console.log(err);
      });
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
