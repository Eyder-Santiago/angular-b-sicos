
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //clase 45, importar clase OnInit

  titulo = 'Listado de Personas';

 
  //clase 45 debido a que ya no se está emitiendo el evento, entonces en la plantilla agregarPersona() es el que se encargará de agregar la nueva persona, no necesitamos la función agregarPersona()
 /*
  personaAgregada(persona: Persona){ //recibimos el onjeto de tipo Persona desde el componente hijo llamado formulario this.personaCreada.emit(persona1), desde la función agregarPersona()
    //usamos el arreglo tipo Persona y agregamos el objeto que viene desde el componente hijo.
    //this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona:" + persona.nombre);
    //this.personas.push(persona);
    this.personasServices.agregarPersona(persona);
  }
  */
  

}
