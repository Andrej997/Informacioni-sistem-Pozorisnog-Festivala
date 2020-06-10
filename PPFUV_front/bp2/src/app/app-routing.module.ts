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
import { TableFestivalComponent } from './components/table-festival/table-festival.component';
import { TableFormaComponent } from './components/table-forma/table-forma.component';
import { TablePropDeoFestComponent } from './components/table-prop-deo-fest/table-prop-deo-fest.component';
import { TableSalaComponent } from './components/table-sala/table-sala.component';
import { TablePredstavaComponent } from './components/table-predstava/table-predstava.component';
import { TableUgovorComponent } from './components/table-ugovor/table-ugovor.component';
import { TableOrgOdbComponent } from './components/table-org-odb/table-org-odb.component';
import { TableNagradaComponent } from './components/table-nagrada/table-nagrada.component';
import { TableRadnikComponent } from './components/table-radnik/table-radnik.component';


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
    children: [
      { path: "",  component: CreateFestivalComponent},
      { path: ":id",  component: CreateFestivalComponent},
    ]
  },
  {
    path: "createForma",
    children: [
      { path: "",  component: CreateFormaComponent},
      { path: ":id",  component: CreateFormaComponent},
    ]
  },
  {
    path: "createPropDeoFest",
    children: [
      { path: "",  component: CreatePropDeoFestComponent},
      { path: ":id",  component: CreatePropDeoFestComponent},
    ]
  },
  {
    path: "createSala",
    children: [
      { path: "",  component: CreateSalaComponent},
      { path: ":id",  component: CreateSalaComponent},
    ]
  },
  {
    path: "createPredstava",
    children: [
      { path: "",  component: CreatePredstavaComponent},
      { path: ":id",  component: CreatePredstavaComponent},
    ]
  },
  {
    path: "createUgovor",
    children: [
      { path: "",  component: CreateUgovorComponent},
      { path: ":id",  component: CreateUgovorComponent},
    ]
  },
  {
    path: "createOrgOdb",
    children: [
      { path: "",  component: CreateOrgOdbComponent},
      { path: ":id",  component: CreateOrgOdbComponent},
    ]
  },
  {
    path: "createNagrada",
    children: [
      { path: "",  component: CreateNagradaComponent},
      { path: ":id",  component: CreateNagradaComponent},
    ]
  },
  {
    path: "createRadnik",
    children: [
      { path: "",  component: CreateRadnikComponent},
      { path: ":id",  component: CreateRadnikComponent},
    ]
  },
  {
    path: "tablePozoriste",
    component: TablePozoristeComponent
  },
  {
    path: "tableFestival",
    component: TableFestivalComponent
  },
  {
    path: "tableForma",
    component: TableFormaComponent
  },
  {
    path: "tablePropdeoFest",
    component: TablePropDeoFestComponent
  },
  {
    path: "tableSala",
    component: TableSalaComponent
  },
  {
    path: "tablePredstava",
    component: TablePredstavaComponent
  },
  {
    path: "tableUgovor",
    component: TableUgovorComponent
  },
  {
    path: "tableOrgOdb",
    component: TableOrgOdbComponent
  },
  {
    path: "tableNagrada",
    component: TableNagradaComponent
  },
  {
    path: "tableRadnik",
    component: TableRadnikComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
