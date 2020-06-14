import { Component, OnInit } from '@angular/core';
import { Predstava } from 'src/app/entities/predstava/predstava';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { Router } from '@angular/router';
import { Reditelj } from 'src/app/entities/reditelj/reditelj';
import { Glumac } from 'src/app/entities/glumac/glumac';
import { Glumi } from 'src/app/entities/Glumi/glumi';
import { Realizuje } from 'src/app/entities/Realizuje/realizuje';

@Component({
  selector: 'app-table-predstava',
  templateUrl: './table-predstava.component.html',
  styleUrls: ['./table-predstava.component.css']
})
export class TablePredstavaComponent implements OnInit {
  allPredstava: Array<Predstava> = new Array<Predstava>();

  allGlumac: Array<Glumac> = new Array<Glumac>();

  allReditelj: Array<Reditelj> = new Array<Reditelj>();

  allGlumi: Array<Glumi> = new Array<Glumi>();

  allRealizuje: Array<Realizuje> = new Array<Realizuje>();

  errorText: string = "";

  constructor(private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.loadAllPredstava();
    this.loadAllGlumac();
    this.loadAllReditelj();
    this.loadGlume();
    this.loadRealizuje();
  }

  loadGlume() {
    this.httpService.getAction('Glumi')
    .toPromise()
    .then(result => {
      this.allGlumi = result as Glumi[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadRealizuje() {
    this.httpService.getAction('Realizuje')
    .toPromise()
    .then(result => {
      this.allRealizuje = result as Realizuje[];
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadAllPredstava() {
    this.httpService.getAction('Predstava')
    .toPromise()
    .then(result => {
      this.allPredstava = result as Predstava[];
      // console.log(this.allPredstava);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadAllGlumac() {
    this.httpService.getAction('Glumac')
    .toPromise()
    .then(result => {
      this.allGlumac = result as Glumac[];
      if (this.allGlumac.length > 0)
        this.addGlumacId = this.allGlumac[0].id;
      //console.log(this.allAeroplanes);
    })
    .catch(
      err => {
        console.log(err)
      });
  }

  loadAllReditelj() {
    this.httpService.getAction('Reditelj')
    .toPromise()
    .then(result => {
      this.allReditelj = result as Reditelj[];
      if (this.allReditelj.length > 0)
        this.addRediteljId = this.allReditelj[0].id;
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

  addGlumacId: number = 0;
  errorGlumac: boolean = false;

  chageGlumac(event) {
    this.addGlumacId = event;
    // console.log(this.addGlumacId);
  }

  addGlumacBtn(event) {
    let predstavaId: number = event;
    for (let i = 0; i < this.allGlumi.length; ++i) {
      if (this.allGlumi[i].glumac.id == this.addGlumacId && this.allGlumi[i].predstava.id == predstavaId) {
        this.errorGlumac = true;
        this.errorText = "Glumac vec glumi u toj predstavi!"
        return;
      }
    }
    this.errorGlumac = false;
    let glumi = new Glumi();
    for (let i = 0; i < this.allGlumac.length; ++i) {
      if (this.allGlumac[i].id == this.addGlumacId) {
        glumi.glumac = this.allGlumac[i];
        break;
      }
    }
    for (let i = 0; i < this.allPredstava.length; ++i) {
      if (this.allPredstava[i].id == predstavaId) {
        if (this.allPredstava[i].izabran == null) {
          this.errorGlumac = true;
          this.errorText = "Ta predstava nije nicija, a glucam glumi u predstavama koje se izvode!"
          return;
        }
        glumi.predstava = this.allPredstava[i];
        break;
      }
    }
    this.postMethod('Glumi', 'AddGlumi', glumi);
  }

  chageReditelj(event) {
    this.addRediteljId = event;
    // console.log(this.addRediteljId);
  }
  addRediteljId: number = 0;
  errorReditelj: boolean = false;
  addRediteljBtn(event) {
    let predstavaId: number = event;
    for (let i = 0; i < this.allRealizuje.length; ++i) {
      if (this.allRealizuje[i].reditelj.id == this.addRediteljId && this.allRealizuje[i].predstava.id == predstavaId) {
        this.errorReditelj = true;
        this.errorText = "Reditelj vec je u rezije te predstave!"
        return;
      }
    }
    this.errorReditelj = false;
    let realizuje = new Realizuje();
    for (let i = 0; i < this.allReditelj.length; ++i) {
      if (this.allReditelj[i].id == this.addRediteljId) {
        realizuje.reditelj = this.allReditelj[i];
        break;
      }
    }
    for (let i = 0; i < this.allPredstava.length; ++i) {
      if (this.allPredstava[i].id == predstavaId) {
        realizuje.predstava = this.allPredstava[i];
        break;
      }
    }
    this.postMethod('Realizuje', 'AddRealizuje', realizuje);
  }

  postMethod(controllerName: string, controllerAction: string, body: any) {
    this.httpService.postAction(controllerName, controllerAction, body).subscribe(
      res => { 
        this.loadAll();
      },
      err => { 
        console.log(err);
      }
    );
  }
}
