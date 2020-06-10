import { Component, OnInit } from '@angular/core';
import { Nagrada } from 'src/app/entities/nagrada/nagrada';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

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
              iznos: this.nagrada.iznos
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
    iznos: new FormControl("", [Validators.required, Validators.maxLength(30)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let nagrada: Nagrada = new Nagrada();
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
