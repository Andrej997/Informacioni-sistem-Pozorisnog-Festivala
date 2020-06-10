import { Component, OnInit } from '@angular/core';
import { PropDeoFest } from 'src/app/entities/prop-deo-fest/prop-deo-fest';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-prop-deo-fest',
  templateUrl: './table-prop-deo-fest.component.html',
  styleUrls: ['./table-prop-deo-fest.component.css']
})
export class TablePropDeoFestComponent implements OnInit {
  allPropDeoFest: Array<PropDeoFest> = new Array<PropDeoFest>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('PropDeoFest')
    .toPromise()
    .then(result => {
      this.allPropDeoFest = result as PropDeoFest[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changePropDeoFest(event) {
    this.router.navigate(['/createPropDeoFest/' + event.target.id]);
  }

  deletePropDeoFest(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("PropDeoFest", "DeletePropDeoFest", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }

}
