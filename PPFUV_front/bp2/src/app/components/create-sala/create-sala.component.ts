import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/entities/sala/sala';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-sala',
  templateUrl: './create-sala.component.html',
  styleUrls: ['./create-sala.component.css']
})
export class CreateSalaComponent implements OnInit {
  id: number = 0;
  sala: Sala;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Sala", this.id).toPromise()
          .then(result => {
            this.sala = result as Sala;
            this.form.setValue({
              kapacPublike: this.sala.kapacPublike
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
    kapacPublike: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let sala: Sala = new Sala();
    sala.kapacPublike = this.form.value.kapacPublike;

    if (this.change == true) {
      sala.id = this.sala.id;
      this.httpService.putAction('Sala', sala).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableSala']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('Sala', 'AddSala', sala).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableSala']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(sala);
  }

}
