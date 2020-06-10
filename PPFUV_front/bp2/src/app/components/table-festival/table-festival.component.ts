import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/entities/festival/festival';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-festival',
  templateUrl: './table-festival.component.html',
  styleUrls: ['./table-festival.component.css']
})
export class TableFestivalComponent implements OnInit {

  allFestivali: Array<Festival> = new Array<Festival>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Festival')
    .toPromise()
    .then(result => {
      this.allFestivali = result as Festival[];
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changeFestival(event) {
    this.router.navigate(['/createFestival/' + event.target.id]);
  }

  deleteFestival(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Festival", "DeleteFestival", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
