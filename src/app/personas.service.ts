import { Injectable } from "@angular/core";
import { LoggingService } from "./loggingService.service";
import { Persona } from "./persona.model";

@Injectable() //para utilizar un servicio dentro de otro servicio
export class PersonasService{

    //se pasará al servicio PersonasService
    personas: Persona[] = 
    [
      new Persona('Juan', 'Perez'), //importamos la clase persona.model. Creamos un arreglo de Personas, con 2 objetos declarados
      new Persona('Laura', 'Juarez'),
      new Persona('Karla', 'Lara')
    ];  

    constructor(private loggingService: LoggingService){
  
    }

      //servicio LoggingServices
      /*
    constructor(private loggingService: LoggingService, private personasServices: PersonasServices){

    }
    */

    agregarPersona(persona: Persona){ 
      this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona:" + persona.nombre);
        this.personas.push(persona);
      }
}

//lo que se quiere hacer en la clase 46 es que el logging se va a hacer en personas.service.ts, así que la información que se
//va a mandar va a estar centralizada en el método agregarPersona(), servicio dentro de un servicio