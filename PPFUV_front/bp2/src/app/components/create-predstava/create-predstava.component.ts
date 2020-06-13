import { Component, OnInit } from '@angular/core';
import { Predstava } from 'src/app/entities/predstava/predstava';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-predstava',
  templateUrl: './create-predstava.component.html',
  styleUrls: ['./create-predstava.component.css']
})
export class CreatePredstavaComponent implements OnInit {
  id: number = 0;
  predstava: Predstava;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Predstava", this.id).toPromise()
          .then(result => {
            this.predstava = result as Predstava;
            this.form.setValue({
              id: this.predstava.id,
              naziv: this.predstava.naziv
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
  });
  
  get f(){
    return this.form.controls;
  }

  checkerActivated: boolean = false;
  checkText: string = "";
  showSubmit: boolean = false;
  checkId() {
    let intVal = Number.parseInt(this.form.value.id);
    let type: number = 8;
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
    let predstava: Predstava = new Predstava();
    predstava.naziv = this.form.value.naziv;
    predstava.id = this.form.value.id;

    if (this.change == true) {
      predstava.id = this.predstava.id;
      this.httpService.putAction('Predstava', predstava).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tablePredstava']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('Predstava', 'AddPredstava', predstava).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tablePredstava']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(predstava);
  }

}
