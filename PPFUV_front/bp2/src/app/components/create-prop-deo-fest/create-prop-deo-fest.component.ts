import { Component, OnInit } from '@angular/core';
import { PropDeoFest } from 'src/app/entities/prop-deo-fest/prop-deo-fest';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-prop-deo-fest',
  templateUrl: './create-prop-deo-fest.component.html',
  styleUrls: ['./create-prop-deo-fest.component.css']
})
export class CreatePropDeoFestComponent implements OnInit {
  id: number = 0;
  propDeoFest: PropDeoFest;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("PropDeoFest", this.id).toPromise()
          .then(result => {
            this.propDeoFest = result as PropDeoFest;
            this.form.setValue({
              id: this.propDeoFest.id,
              naziv: this.propDeoFest.naziv,
              // vremeOdrzavanja: this.propDeoFest.vremeOdrzavanja
            })
            this.change = true;
            this.showSubmit = true;
          })
          .catch(
            err => {
              console.log(err)
            });
    }
  }

  form = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.max(10000), Validators.min(1)]),
    naziv: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    // vremeOdrzavanja: new FormControl("",[Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  checkerActivated: boolean = false;
  checkText: string = "";
  showSubmit: boolean = false;
  checkId() {
    let intVal = Number.parseInt(this.form.value.id);
    let type: number = 9;
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
    let propDeoFest: PropDeoFest = new PropDeoFest();
    propDeoFest.naziv = this.form.value.naziv;
    propDeoFest.id = this.form.value.id;
    // propDeoFest.vremeOdrzavanja = this.form.value.vremeOdrzavanja;

    if (this.change == true) {
      propDeoFest.id = this.propDeoFest.id;
      this.httpService.putAction('PropDeoFest', propDeoFest).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tablePropDeoFest']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('PropDeoFest', 'AddPropDeoFest', propDeoFest).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tablePropDeoFest']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(propDeoFest);
  }

}
