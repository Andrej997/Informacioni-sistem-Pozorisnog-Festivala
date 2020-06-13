import { Component, OnInit } from '@angular/core';
import { OrgOdb } from 'src/app/entities/org-odb/org-odb';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-org-odb',
  templateUrl: './table-org-odb.component.html',
  styleUrls: ['./table-org-odb.component.css']
})
export class TableOrgOdbComponent implements OnInit {
  allOrgOdb: Array<OrgOdb> = new Array<OrgOdb>();

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.httpService.getAction('OrgOdb')
    .toPromise()
    .then(result => {
      this.allOrgOdb = result as OrgOdb[];
      console.log(this.allOrgOdb);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  changeOrgOdb(event) {
    this.router.navigate(['/createOrgOdb/' + event.target.id]);
  }

  deleteOrgOdb(event) {
    let id: number = Number.parseInt(event.target.id);
    this.httpService.deleteAction("OrgOdb", "DeleteOrgOdb", id).toPromise()
      .then(result => {
        location.reload();
      })
      .catch(
        err => {
          console.log(err);
        });
  }
}
