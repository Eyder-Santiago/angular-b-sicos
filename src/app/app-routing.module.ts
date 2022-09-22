import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {path: '', component:PersonasComponent}, //cuando estemos en inicio se va a desplegar el componente personas
  {path: 'personas', component: PersonasComponent, children: [
    {path: 'agregar', component: FormularioComponent}, 
    {path: ':id', component: FormularioComponent}, 
  ]}
]
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
