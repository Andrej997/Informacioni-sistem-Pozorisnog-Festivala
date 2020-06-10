import { Component, OnInit } from '@angular/core';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-org-odb',
  templateUrl: './create-org-odb.component.html',
  styleUrls: ['./create-org-odb.component.css']
})
export class CreateOrgOdbComponent implements OnInit {
  id: number = 0;
  orgOdb: OrgOdb;
  change: boolean = false;

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("OrgOdb", this.id).toPromise()
          .then(result => {
            this.orgOdb = result as OrgOdb;
            this.form.setValue({
              // naziv: this.orgOdb.naziv
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
    // datumSklapanja: new FormControl([Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let orgOdb: OrgOdb = new OrgOdb();
    // orgOdb.svota = this.form.value.svota;

    if (this.change == true) {
      orgOdb.id = this.orgOdb.id;
      this.httpService.putAction('OrgOdb', orgOdb).subscribe (
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableOrgOdb']);
        },
        err => { 
          console.log(err);
        });
    }
    else {
      this.httpService.postAction('OrgOdb', 'AddOrgOdb', orgOdb).subscribe(
        res => { 
          this.form.reset(); 
          this.router.navigate(['/tableOrgOdb']);
        },
        err => { 
          console.log(err);
        }
      );
    }

    console.log(orgOdb);
  }

}
