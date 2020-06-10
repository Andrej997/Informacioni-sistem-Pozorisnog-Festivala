import { Component, OnInit } from '@angular/core';
import { Predstava } from 'src/app/entities/predstava/predstava';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

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
              naziv: this.predstava.naziv
            })
            this.change = true;
          })
          .catch(
            err => {
              console.log(err)
            });
    }
  }

  form = new FormGroup({
    naziv: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let predstava: Predstava = new Predstava();
    predstava.naziv = this.form.value.naziv;

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
