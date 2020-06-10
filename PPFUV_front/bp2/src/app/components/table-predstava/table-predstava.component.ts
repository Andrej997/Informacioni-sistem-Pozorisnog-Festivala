import { Component, OnInit } from '@angular/core';
import { Predstava } from 'src/app/entities/predstava/predstava';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-predstava',
  templateUrl: './table-predstava.component.html',
  styleUrls: ['./table-predstava.component.css']
})
export class TablePredstavaComponent implements OnInit {
  allPredstava: Array<Predstava> = new Array<Predstava>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Predstava')
    .toPromise()
    .then(result => {
      this.allPredstava = result as Predstava[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changePredstava(event) {
    this.router.navigate(['/createPredstava/' + event.target.id]);
  }

  deletePredstava(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Predstava", "DeletePredstava", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
