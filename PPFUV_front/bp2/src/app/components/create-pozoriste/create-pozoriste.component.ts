import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-pozoriste',
  templateUrl: './create-pozoriste.component.html',
  styleUrls: ['./create-pozoriste.component.css']
})
export class CreatePozoristeComponent implements OnInit {
  id: number = 0;
  pozoriste: Pozoriste;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Pozoriste", this.id).toPromise()
          .then(result => {
            this.pozoriste = result as Pozoriste;
            this.form.setValue({
              naziv: this.pozoriste.naziv,
              brZaposlenih: this.pozoriste.brZaposlenih
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
    naziv: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    brZaposlenih: new FormControl(0,[Validators.required, Validators.min(1)]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let pozoriste: Pozoriste = new Pozoriste();
    pozoriste.naziv = this.form.value.naziv;
    pozoriste.brZaposlenih = this.form.value.brZaposlenih;

    if (this.change == true) {
      pozoriste.id = this.pozoriste.id;
      this.httpService.putAction('Pozoriste', pozoriste).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tablePozoriste']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('Pozoriste', 'AddPozoriste', pozoriste).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tablePozoriste']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(pozoriste);
  }

}
