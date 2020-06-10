import { Component, OnInit } from '@angular/core';
import { Nagrada } from 'src/app/entities/nagrada/nagrada';
import { Forma } from 'src/app/entities/forma/forma';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-nagrada',
  templateUrl: './table-nagrada.component.html',
  styleUrls: ['./table-nagrada.component.css']
})
export class TableNagradaComponent implements OnInit {
  allNagrada: Array<Nagrada> = new Array<Nagrada>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Nagrada')
    .toPromise()
    .then(result => {
      this.allNagrada = result as Nagrada[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changeNagrada(event) {
    this.router.navigate(['/createNagrada/' + event.target.id]);
  }

  deleteNagrada(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Nagrada", "DeleteNagrada", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
