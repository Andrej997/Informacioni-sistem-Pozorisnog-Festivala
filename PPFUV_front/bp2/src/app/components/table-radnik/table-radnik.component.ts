import { Component, OnInit } from '@angular/core';
import { Radnik } from 'src/app/entities/radnik/radnik';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';
import { Selektor } from 'src/app/entities/selektor/selektor';
import { ClanOrgOdb } from 'src/app/entities/clan-org-odb/clan-org-odb';
import { Glumac } from 'src/app/entities/glumac/glumac';
import { Reditelj } from 'src/app/entities/reditelj/reditelj';

@Component({
  selector: 'app-table-radnik',
  templateUrl: './table-radnik.component.html',
  styleUrls: ['./table-radnik.component.css']
})
export class TableRadnikComponent implements OnInit {
  allSelektor: Array<Selektor> = new Array<Selektor>();
  allClanOrgOdb: Array<ClanOrgOdb> = new Array<ClanOrgOdb>();
  allGlumac: Array<Glumac> = new Array<Glumac>();
  allReditelj: Array<Reditelj> = new Array<Reditelj>();
  allRadnik: Array<Radnik> = new Array<Radnik>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Selektor')
    .toPromise()
    .then(result => {
      this.allSelektor = result as Selektor[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
      this.httpService.getAction('ClanOrgOdb')
    .toPromise()
    .then(result => {
      this.allClanOrgOdb = result as ClanOrgOdb[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
      this.httpService.getAction('Glumac')
    .toPromise()
    .then(result => {
      this.allGlumac = result as Glumac[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
      this.httpService.getAction('Reditelj')
    .toPromise()
    .then(result => {
      this.allReditelj = result as Reditelj[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
      this.httpService.getAction('Radnik')
    .toPromise()
    .then(result => {
      this.allRadnik = result as Radnik[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }
  changeSelektor(event) {
    this.router.navigate(['/createRadnik/' + event.target.id + '/selektor']);
  }

  deleteSelektor(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Selektor", "DeleteSelektor", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

  changeClanOdbOrg(event) {
    this.router.navigate(['/createRadnik/' + event.target.id + '/clanOdbOrg']);
  }

  deleteClanOdbOrg(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("ClanOrgOdb", "DeleteClanOrgOdb", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

  changeGlumac(event) {
    this.router.navigate(['/createRadnik/' + event.target.id + '/glumac']);
  }

  deleteGlumac(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Glumac", "DeleteGlumac", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

  changeReditelj(event) {
    this.router.navigate(['/createRadnik/' + event.target.id + '/reditelj']);
  }

  deleteReditelj(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Reditelj", "DeleteReditelj", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

  changeRadnik(event) {
    this.router.navigate(['/createRadnik/' + event.target.id + '/other']);
  }

  deleteRadnik(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Radnik", "DeleteRadnik", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
