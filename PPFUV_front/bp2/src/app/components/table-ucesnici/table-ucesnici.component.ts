import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/entities/festival/festival';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Izabran } from 'src/app/entities/izabran/izabran';
import { Nagrada } from 'src/app/entities/nagrada/nagrada';

@Component({
  selector: 'app-table-ucesnici',
  templateUrl: './table-ucesnici.component.html',
  styleUrls: ['./table-ucesnici.component.css']
})
export class TableUcesniciComponent implements OnInit {

  id: number = 0;

  nagradaDodeljena: boolean = false;

  festival: Festival = new Festival();

  ucesnici: Array<Pozoriste> = new Array<Pozoriste>();

  allNagrada: Array<Nagrada> = new Array<Nagrada>();

  allIzabran: Array<Izabran> = new Array<Izabran>();

  constructor(private httpService: HttpServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.ucesnici = new Array<Pozoriste>();
    this.loadFestival();
    this.loadAllNagrada();
    this.loadAllIzabran();
  }

  loadAllIzabran() {
    this.httpService.getAction('Izabran')
    .toPromise()
    .then(result => {
      this.allIzabran = result as Izabran[];
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadFestival() {
    this.route.params.subscribe(params => { this.id = params['id']; });
    if (this.id != 0 && this.id != undefined) {
      this.httpService.getIdAction("Festival", this.id).toPromise()
        .then(result => {
          this.festival = result as Festival;
          this.festival.ucesnici.forEach(element => {
            this.ucesnici.push(element.pozoriste);
          });
          // console.log(this.ucesnici)

          for (let i = 0; i < this.festival.ucesnici.length; ++i) {
            if (this.festival.ucesnici[i].nagrada != null) {
              this.nagradaDodeljena = true;
            }
          }
        })
        .catch(
          err => {
            console.log(err)
          });
    }
  }

  loadAllNagrada() {
    this.httpService.getAction('Nagrada')
    .toPromise()
    .then(result => {
      this.allNagrada = result as Nagrada[];
      if (this.allNagrada.length > 0) {
        this.idNagrada = this.allNagrada[0].id;
      }
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  idNagrada: number = 0;
  onSelectNagrada(event) {
    this.idNagrada = event;
    // console.log(this.idUgovor);
  }

  giveNagrada(event) {
    // console.log(event);
    // console.log(this.idNagrada);

    let izabran = new Izabran();
    for (let i = 0; i < this.allIzabran.length; ++i) {
      if (this.allIzabran[i].pozoriste.id == event) {
        izabran = this.allIzabran[i];
        break;
      }
    }

    let nagrada = new Nagrada();
    for (let i = 0; i < this.allNagrada.length; ++i) {
      if (this.allNagrada[i].id == this.idNagrada) {
        nagrada = this.allNagrada[i];
        break;
      }
    }
    izabran.nagrada = nagrada;
    // console.log(izabran);
    this.httpService.putAction('Izabran', izabran).subscribe (
      res => { 
        this.loadAll();
      },
      err => { 
        console.log(err);
      });
  }

}
