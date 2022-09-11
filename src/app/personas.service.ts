import { Persona } from "./persona.model";

export class PersonasService{

    //se pasará al servicio PersonasService
    personas: Persona[] = 
    [
      new Persona('Juan', 'Perez'), //importamos la clase persona.model. Creamos un arreglo de Personas, con 2 objetos declarados
      new Persona('Laura', 'Juarez'),
      new Persona('Karla', 'Lara')
    ];  

      //servicio LoggingServices
      /*
    constructor(private loggingService: LoggingService, private personasServices: PersonasServices){

    }
    */

    agregarPersona(persona: Persona){ 
      //  this.loggingService.enviaMensajeAConsola("agregamos al arreglo la nueva persona:" + persona.nombre);
        this.personas.push(persona);
      }
}