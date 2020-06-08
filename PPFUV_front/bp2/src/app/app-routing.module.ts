import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePozoristeComponent } from './components/create-pozoriste/create-pozoriste.component';
import { CreateFestivalComponent } from './components/create-festival/create-festival.component';
import { CreateFormaComponent } from './components/create-forma/create-forma.component';
import { CreatePropDeoFestComponent } from './components/create-prop-deo-fest/create-prop-deo-fest.component';
import { CreateSalaComponent } from './components/create-sala/create-sala.component';
import { CreatePredstavaComponent } from './components/create-predstava/create-predstava.component';
import { CreateUgovorComponent } from './components/create-ugovor/create-ugovor.component';
import { CreateOrgOdbComponent } from './components/create-org-odb/create-org-odb.component';
import { CreateNagradaComponent } from './components/create-nagrada/create-nagrada.component';
import { CreateRadnikComponent } from './components/create-radnik/create-radnik.component';
import { TablePozoristeComponent } from './components/table-pozoriste/table-pozoriste.component';


const routes: Routes = [
  {
    path: "createPozoriste",
    children: [
      { path: "",  component: CreatePozoristeComponent},
      { path: ":id",  component: CreatePozoristeComponent},
    ]
  },
  {
    path: "createFestival",
    component: CreateFestivalComponent
  },
  {
    path: "createForma",
    component: CreateFormaComponent
  },
  {
    path: "createPropDeoFest",
    component: CreatePropDeoFestComponent
  },
  {
    path: "createSala",
    component: CreateSalaComponent
  },
  {
    path: "createPredstava",
    component: CreatePredstavaComponent
  },
  {
    path: "createUgovor",
    component: CreateUgovorComponent
  },
  {
    path: "createOrgOdb",
    component: CreateOrgOdbComponent
  },
  {
    path: "createNagrada",
    component: CreateNagradaComponent
  },
  {
    path: "createRadnik",
    component: CreateRadnikComponent
  },
  {
    path: "tablePozoriste",
    component: TablePozoristeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
