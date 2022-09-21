import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component:PersonasComponent}, //cuando estemos en inicio se va a desplegar el componente personas
  {path: 'personas', component: PersonasComponent},
  {path: 'personas/agregar', component: FormularioComponent}, //cuando agreguemos personas se va a mostrar el componente de formulario
  {path: 'personas/:id', component: FormularioComponent}, //nombre parámetro 'id', elque va a procesar el url va a hacer formularioComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
