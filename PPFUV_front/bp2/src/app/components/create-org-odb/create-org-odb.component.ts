import { Component, OnInit } from '@angular/core';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClanOrgOdb } from 'src/app/entities/clan-org-odb/clan-org-odb';
import { Selektor } from 'src/app/entities/selektor/selektor';
import { IdChecker } from 'src/app/entities/IdChecker/id-checker';

@Component({
  selector: 'app-create-org-odb',
  templateUrl: './create-org-odb.component.html',
  styleUrls: ['./create-org-odb.component.css']
})
export class CreateOrgOdbComponent implements OnInit {
  id: number = 0;
  orgOdb: OrgOdb;
  change: boolean = false;

  allClanOrgOdb: Array<ClanOrgOdb> = new Array<ClanOrgOdb>();
  allSelektor: Array<Selektor> = new Array<Selektor>();

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("OrgOdb", this.id).toPromise()
          .then(result => {
            this.orgOdb = result as OrgOdb;
            this.form.setValue({
              id: this.orgOdb.id,
              clanOrgOdb1: this.orgOdb.clanOrgOdbora1.id,
              clanOrgOdb2: this.orgOdb.clanOrgOdbora2.id,
              clanOrgOdb3: this.orgOdb.clanOrgOdbora3.id,
              selektor: this.orgOdb.selektor.id,
            })
            this.change = true;
            this.showSubmit = true;
          })
          .catch(
            err => {
              console.log(err)
            });
    }
    this.httpService.getAction("ClanOrgOdb").toPromise()
      .then(result => {
        this.allClanOrgOdb = result as ClanOrgOdb[];
      })
      .catch(
        err => {
          console.log(err)
        });

    this.httpService.getAction("Selektor").toPromise()
      .then(result => {
        this.allSelektor= result as Selektor[];
      })
      .catch(
        err => {
          console.log(err)
        });
    
  }

  form = new FormGroup({
    id: new FormControl(0, [Validators.required, Validators.max(10000), Validators.min(1)]),
    clanOrgOdb1: new FormControl("",[Validators.required]),
    clanOrgOdb2: new FormControl("",[Validators.required]),
    clanOrgOdb3: new FormControl("",[Validators.required]),
    selektor: new FormControl("",[Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  checkerActivated: boolean = false;
  checkText: string = "";
  showSubmit: boolean = false;
  checkId() {
    let intVal = Number.parseInt(this.form.value.id);
    let type: number = 6;
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
    let orgOdb: OrgOdb = new OrgOdb();
    orgOdb.id = this.form.value.id;

    if (this.change == true) {
      orgOdb.id = this.orgOdb.id;
      orgOdb = this.addToOrgOdb(orgOdb);
      //console.log(orgOdb);
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
      orgOdb = this.addToOrgOdb(orgOdb);
      //console.log(this.form.value.clanOrgOdb1);
      this.httpService.postAction('OrgOdb', 'AddOrgOdb', orgOdb).subscribe(
        res => { 
          let orgOdbRet = res as OrgOdb;
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

  addToOrgOdb(orgOdb: OrgOdb): OrgOdb {
    this.allClanOrgOdb.forEach(element => {
      if (element.id == this.form.value.clanOrgOdb1) {
        orgOdb.clanOrgOdbora1 = element;
      }
      if (element.id == this.form.value.clanOrgOdb2) {
        orgOdb.clanOrgOdbora2 = element;
      }
      if (element.id == this.form.value.clanOrgOdb3) {
        orgOdb.clanOrgOdbora3 = element;
      }
    });

    this.allSelektor.forEach(element => {
      if (element.id == this.form.value.selektor) {
        orgOdb.selektor = element;
      }
    });

    return orgOdb;
  }
  // onChangeClanOrgOdb(event) {
  //   for (let i = 0; i < this.allClanOrgOdb.length; ++i) {
  //     if (this.allClanOrgOdb[i].id == event) {
  //       this.allClanOrgOdb.splice(i,1);
  //       break;
  //     }
  //   }
  // }

  // onChangeSelektor(event) {
  //   console.log(event);
  // }

}
