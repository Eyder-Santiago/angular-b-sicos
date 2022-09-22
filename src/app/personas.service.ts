import { EventEmitter, Injectable } from "@angular/core";
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

    saludar = new EventEmitter<number>(); //Emitiendo la variable Saludar

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
    encontrarPersona(index : number){ //declaramos una variable, y con ayuda cdel arreglo personas, proporcionamos el indice que estamos recibiendo y nos va a regresar el objeto persona que se encuentra agregado en este índice y regresamos el objeto persona que hemos encontrado con el return
      let persona: Persona = this.personas[index];
      return persona;
    }

    modificarPersona(index : number, persona:Persona){
      let persona1 = this.personas[index]; //regresando el objeto persona que se encuentra en el índice especificadp
      persona1.nombre = persona.nombre;
      persona1.apellido = persona.apellido;
    }

    eliminarPersona(index : number){
      this.personas.splice(index,1); //especificamos que se va a eliminar 1 elemento

    }

}

//lo que se quiere hacer en la clase 46 es que el logging se va a hacer en personas.service.ts, así que la información que se
//va a mandar va a estar centralizada en el método agregarPersona(), servicio dentro de un servicio