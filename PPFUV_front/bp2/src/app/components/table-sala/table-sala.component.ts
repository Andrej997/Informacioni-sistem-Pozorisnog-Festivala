import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/entities/sala/sala';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-sala',
  templateUrl: './table-sala.component.html',
  styleUrls: ['./table-sala.component.css']
})
export class TableSalaComponent implements OnInit {
  allSala: Array<Sala> = new Array<Sala>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Sala')
    .toPromise()
    .then(result => {
      this.allSala = result as Sala[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changeSala(event) {
    this.router.navigate(['/createSala/' + event.target.id]);
  }

  deleteSala(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Sala", "DeleteSala", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

}
