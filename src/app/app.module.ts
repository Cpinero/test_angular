import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//rutas
import { app_routing } from './app.routes';

//Componentes
import { PersonajesComponent } from './components/personajes/personajes.component';
import { EdadPipe } from './pipes/edad.pipe';
import { PatronusPipe } from './pipes/patronus.pipe';
import { TablaComponent } from './components/tabla/tabla.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { NuevosEstudiantesComponent } from './components/nuevos-estudiantes/nuevos-estudiantes.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    EdadPipe,
    PatronusPipe,
    TablaComponent,
    ProfesoresComponent,
    NavbarComponent,
    EstudiantesComponent,
    NuevosEstudiantesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
