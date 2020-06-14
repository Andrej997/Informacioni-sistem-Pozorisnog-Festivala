import { Component, OnInit } from '@angular/core';
import { Nagrada } from 'src/app/entities/nagrada/nagrada';
import { Glumi } from 'src/app/entities/Glumi/glumi';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';
import { Glumac } from 'src/app/entities/glumac/glumac';

@Component({
  selector: 'app-table-glume',
  templateUrl: './table-glume.component.html',
  styleUrls: ['./table-glume.component.css']
})
export class TableGlumeComponent implements OnInit {
  allGlumi: Array<Glumi> = new Array<Glumi>();

  allNagrada: Array<Nagrada> = new Array<Nagrada>();

  allGlumac: Array<Glumac> = new Array<Glumac>();

  errorText: string = "";

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.loadGlume();
    this.loadNagrada();
  }

  loadNagrada() {
    this.httpService.getAction('Nagrada')
    .toPromise()
    .then(result => {
      this.allNagrada = result as Nagrada[];
      if (this.allNagrada.length > 0)
        this.addNagradaId = this.allNagrada[0].id;
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadGlume() {
    this.httpService.getAction('Glumi')
    .toPromise()
    .then(result => {
      this.allGlumi = result as Glumi[];
      this.allGlumi.forEach(element => {
        this.loadGlumac(element.glumac.id);
      });
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadGlumac(id: number) {
    this.httpService.getIdAction("Glumac", id).toPromise()
        .then(result => {
          let glumac = result as Glumac;
          this.allGlumac.push(glumac);
        })
        .catch(
          err => {
            console.log(err)
          });
  }

  addNagradaId: number = 0;
  errorNagrada: boolean = false;

  chageNagrada(event) {
    this.addNagradaId = event;
    console.log(this.allGlumac);
  }

  addGlumacBtn(event) {
    let glumacId: number = event;
    let glumac = new Glumac();
    for (let i = 0; i < this.allGlumac.length; i++) {
      if (this.allGlumac[i].id == glumacId) {
        glumac = this.allGlumac[i];
        break;
      }
    }
    for (let i = 0; i < this.allNagrada.length; i++) {
      if (this.allNagrada[i].id == this.addNagradaId) {
        glumac.nagrada = this.allNagrada[i];
        break;
      }
    }
    this.httpService.putAction("Glumac", glumac).subscribe (
      res => { 
        this.allGlumac = new Array<Glumac>();
        this.loadAll();
      },
      err => { 
        console.log(err);
      });
  }
}
