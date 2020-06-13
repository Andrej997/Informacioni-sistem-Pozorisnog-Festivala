import { Component, OnInit } from '@angular/core';
import { Nagrada } from 'src/app/entities/nagrada/nagrada';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-nagrada',
  templateUrl: './create-nagrada.component.html',
  styleUrls: ['./create-nagrada.component.css']
})
export class CreateNagradaComponent implements OnInit {
  id: number = 0;
  nagrada: Nagrada;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Nagrada", this.id).toPromise()
          .then(result => {
            this.nagrada = result as Nagrada;
            this.form.setValue({
              iznos: this.nagrada.iznos,
              id: this.nagrada.id
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
    iznos: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  checkerActivated: boolean = false;
  checkText: string = "";
  showSubmit: boolean = false;
  checkId() {
    let intVal = Number.parseInt(this.form.value.id);
    let type: number = 5;
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
    let nagrada: Nagrada = new Nagrada();
    nagrada.id = this.form.value.id;
    nagrada.iznos = this.form.value.iznos;

    if (this.change == true) {
      nagrada.id = this.nagrada.id;
      this.httpService.putAction('Nagrada', nagrada).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableNagrada']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('Nagrada', 'AddNagrada', nagrada).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableNagrada']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(nagrada);
  }

}
