
import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado de Personas';
  personas: Persona[] = 
  [
    new Persona('Juan', 'Perez'), //importamos la clase persona.model. Creamos un arreglo de Personas, con 2 objetos declarados
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ];  

  personaAgregada(persona: Persona){ //recibimos el onjeto de tipo Persona desde el componente hijo llamado formulario this.personaCreada.emit(persona1), desde la función agregarPersona()
    //usamos el arreglo tipo Persona y agregamos el objeto que viene desde el componente hijo.
    this.personas.push(persona);
  }

}
