import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { NuevosEstudiantesComponent } from './components/nuevos-estudiantes/nuevos-estudiantes.component';

const app_routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'personajes', component:PersonajesComponent},
    {path: 'profesores', component:ProfesoresComponent},
    {path: 'estudiantes', component:EstudiantesComponent},
    {path: 'nuevos', component:NuevosEstudiantesComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);