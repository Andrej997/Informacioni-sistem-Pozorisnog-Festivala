import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Pozoriste } from 'src/app/entities/pozoriste/pozoriste';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-pozoriste',
  templateUrl: './table-pozoriste.component.html',
  styleUrls: ['./table-pozoriste.component.css']
})
export class TablePozoristeComponent implements OnInit {

  allPozorista: Array<Pozoriste> = new Array<Pozoriste>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Pozoriste')
    .toPromise()
    .then(result => {
      this.allPozorista = result as Pozoriste[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changePozoriste(event) {
    this.router.navigate(['/createPozoriste/' + event.target.id]);
  }

  deletePozoriste(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Pozoriste", "DeletePozoriste", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
