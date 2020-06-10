import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { CreatePozoristeComponent } from './components/create-pozoriste/create-pozoriste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { TableFormaComponent } from './components/table-forma/table-forma.component';
import { TableNagradaComponent } from './components/table-nagrada/table-nagrada.component';
import { TableFestivalComponent } from './components/table-festival/table-festival.component';
import { TableOrgOdbComponent } from './components/table-org-odb/table-org-odb.component';
import { TablePredstavaComponent } from './components/table-predstava/table-predstava.component';
import { TablePropDeoFestComponent } from './components/table-prop-deo-fest/table-prop-deo-fest.component';
import { TableRadnikComponent } from './components/table-radnik/table-radnik.component';
import { TableSalaComponent } from './components/table-sala/table-sala.component';
import { TableUgovorComponent } from './components/table-ugovor/table-ugovor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    CreatePozoristeComponent,
    CreateFestivalComponent,
    CreateFormaComponent,
    CreatePropDeoFestComponent,
    CreateSalaComponent,
    CreatePredstavaComponent,
    CreateUgovorComponent,
    CreateOrgOdbComponent,
    CreateNagradaComponent,
    CreateRadnikComponent,
    TablePozoristeComponent,
    TableFormaComponent,
    TableNagradaComponent,
    TableFestivalComponent,
    TableOrgOdbComponent,
    TablePredstavaComponent,
    TablePropDeoFestComponent,
    TableRadnikComponent,
    TableSalaComponent,
    TableUgovorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
