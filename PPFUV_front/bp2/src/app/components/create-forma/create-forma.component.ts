import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Forma } from 'src/app/entities/forma/forma';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-forma',
  templateUrl: './create-forma.component.html',
  styleUrls: ['./create-forma.component.css']
})
export class CreateFormaComponent implements OnInit {
  id: number = 0;
  forma: Forma;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Forma", this.id).toPromise()
          .then(result => {
            this.forma = result as Forma;
            this.form.setValue({
              id: this.forma.id,
              naziv: this.forma.naziv
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
    let type: number = 3;
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
    let forma: Forma = new Forma();
    forma.id = this.form.value.id;
    forma.naziv = this.form.value.naziv;

    if (this.change == true) {
      forma.id = this.forma.id;
      this.httpService.putAction('Forma', forma).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableForma']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('Forma', 'AddForma', forma).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableForma']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(forma);
  }
}
