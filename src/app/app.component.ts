
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.service';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ //clase 45, importar clase OnInit

  titulo = 'Listado de Personas';

  personas: Persona[] = []; //se necesitará para que no falle la app
  /*//Se traladó en clase 45 a personas.services.ts
  personas: Persona[] = 
  [
    new Persona('Juan', 'Perez'), //importamos la clase persona.model. Creamos un arreglo de Personas, con 2 objetos declarados
    new Persona('Laura', 'Juarez'),
    new Persona('Karla', 'Lara')
  ];
  */  

      //servicio LoggingServices
    constructor(private loggingService: LoggingService, private personasServices: PersonasService){

    }
  ngOnInit(): void { //clase 45, este método se ejecuta despupes del contructor
    this.personas = this.personasServices.personas; //valor inicial arreglo vaacío línea 16, después se inicializa el método ngOnInit y se inicializa la variable this.personas con el arreglo definido en PersonasService, this.personas.Service.personas
  }

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
