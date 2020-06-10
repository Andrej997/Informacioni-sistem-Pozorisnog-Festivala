import { Component, OnInit } from '@angular/core';
import { Forma } from 'src/app/entities/forma/forma';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-forma',
  templateUrl: './table-forma.component.html',
  styleUrls: ['./table-forma.component.css']
})
export class TableFormaComponent implements OnInit {
  allForme: Array<Forma> = new Array<Forma>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('Forma')
    .toPromise()
    .then(result => {
      this.allForme = result as Forma[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changeForma(event) {
    this.router.navigate(['/createForma/' + event.target.id]);
  }

  deleteForma(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("Forma", "DeleteForma", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
