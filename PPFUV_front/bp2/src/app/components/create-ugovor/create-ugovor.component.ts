import { Component, OnInit } from '@angular/core';
import { Ugovor } from 'src/app/entities/ugovor/ugovor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-ugovor',
  templateUrl: './create-ugovor.component.html',
  styleUrls: ['./create-ugovor.component.css']
})
export class CreateUgovorComponent implements OnInit {
  id: number = 0;
  ugovor: Ugovor;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Ugovor", this.id).toPromise()
          .then(result => {
            this.ugovor = result as Ugovor;
            this.form.setValue({
              id: this.ugovor.id,
              svota: this.ugovor.svota
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
    svota: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  checkerActivated: boolean = false;
  checkText: string = "";
  showSubmit: boolean = false;
  checkId() {
    let intVal = Number.parseInt(this.form.value.id);
    let type: number = 14;
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
    let ugovor: Ugovor = new Ugovor();
    ugovor.id = this.form.value.id;
    ugovor.svota = this.form.value.svota;

    if (this.change == true) {
      ugovor.id = this.ugovor.id;
      this.httpService.putAction('Ugovor', ugovor).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableUgovor']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('Ugovor', 'AddUgovor', ugovor).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableUgovor']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(ugovor);
  }

}
