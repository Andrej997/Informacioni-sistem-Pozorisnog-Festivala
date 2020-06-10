import { Component, OnInit } from '@angular/core';
import { Ugovor } from 'src/app/entities/ugovor/ugovor';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-ugovor',
  templateUrl: './table-ugovor.component.html',
  styleUrls: ['./table-ugovor.component.css']
})
export class TableUgovorComponent implements OnInit {
  allUgovor: Array<Ugovor> = new Array<Ugovor>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Ugovor')
    .toPromise()
    .then(result => {
      this.allUgovor = result as Ugovor[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changeUgovor(event) {
    this.router.navigate(['/createUgovor/' + event.target.id]);
  }

  deleteUgovor(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Ugovor", "DeleteUgovor", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
