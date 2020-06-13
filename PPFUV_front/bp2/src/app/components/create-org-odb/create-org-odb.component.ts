import { Component, OnInit } from '@angular/core';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClanOrgOdb } from 'src/app/entities/clan-org-odb/clan-org-odb';
import { Selektor } from 'src/app/entities/selektor/selektor';

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
              clanOrgOdb1: this.orgOdb.clanoviOrgOdbora[0].id,
              clanOrgOdb2: this.orgOdb.clanoviOrgOdbora[1].id,
              clanOrgOdb3: this.orgOdb.clanoviOrgOdbora[2].id,
              selektor: this.orgOdb.selektor.id,
            })
            this.change = true;
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
    clanOrgOdb1: new FormControl("",[Validators.required]),
    clanOrgOdb2: new FormControl("",[Validators.required]),
    clanOrgOdb3: new FormControl("",[Validators.required]),
    selektor: new FormControl("",[Validators.required]),
  });
  
  get f(){
    return this.form.controls;
  }

  submit() {
    let orgOdb: OrgOdb = new OrgOdb();
    // orgOdb.svota = this.form.value.svota;

    if (this.change == true) {
      orgOdb.id = this.orgOdb.id;
      orgOdb = this.addToOrgOdb(orgOdb);
      //console.log(orgOdb);
      this.httpService.putAction('OrgOdb', orgOdb).subscribe (
        res => { 
          console.log(res);
          let orgOdbRet = res as OrgOdb;
          orgOdb.clanoviOrgOdbora.forEach(element => {
            element.OrgOdbid = orgOdb.id;
            this.httpService.putAction('ClanOrgOdb', element).subscribe (
              res => { 
              },
              err => { 
                console.log(err);
              });
          });
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
          orgOdb.clanoviOrgOdbora.forEach(element => {
            element.OrgOdbid = orgOdb.id;
            this.httpService.putAction('ClanOrgOdb', element).subscribe (
              res => { 
              },
              err => { 
                console.log(err);
              });
          });
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
    orgOdb.clanoviOrgOdbora = new Array<ClanOrgOdb>();
    this.allClanOrgOdb.forEach(element => {
      if (element.id == this.form.value.clanOrgOdb1 || element.id == this.form.value.clanOrgOdb2 || element.id == this.form.value.clanOrgOdb3) {
        orgOdb.clanoviOrgOdbora.push(element);
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
