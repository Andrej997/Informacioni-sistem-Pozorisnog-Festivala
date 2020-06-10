import { Component, OnInit } from '@angular/core';
import { Ugovor } from 'src/app/entities/ugovor/ugovor';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

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
              datumSklapanja: this.ugovor.datumSklapanja,
              svota: this.ugovor.svota
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
    svota: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    datumSklapanja: new FormControl([Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let ugovor: Ugovor = new Ugovor();
    ugovor.svota = this.form.value.svota;
    ugovor.datumSklapanja = this.form.value.datumSklapanja;

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
