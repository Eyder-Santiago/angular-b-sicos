import { Component, ElementRef, ViewChild } from '@angular/core'; //clase 45 se eleimina Output y EventEmitter pues no se van a utilizar porque se usará un servicio
import { LoggingService } from '../loggingService.service'; //lo añade automáticamente ángular usando dependency injection, ya se importó globalmente en app.module.ts, no hay necesidad de importarlo por clase
import { Persona } from '../persona.model'; //importamos clase Persona
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
 // providers: [LoggingServices] //especificando que se va a tener un proveedor de servicio, ya se especificó globalmente en app.module.ts, no hay necesidad de especificarlo por clase
})
export class FormularioComponent {
    //Para reportar la información que un componente hijo cree, funcion agregarPersona(), usamos el decorador @output
   // @Output() personaCreada = new EventEmitter<Persona>(); //clase 45, no necesita emitir porque se está usando un servicio . .. . eventEmitter se encarga de crear un mensaje, de comunicar la información que vamos a agregar desde componente hijo a componente padre, e indicamos a EventEmitter que vamos a crear objetos de tipo Persona

  //nombreInput:string = ''; se quita en clase 42, pues no se utilizará two way bidding 
  //apellidoInput:string = '';
  @ViewChild('nombreInput') nombreInput: ElementRef;  //se importa este decorador, se pone como parámetro el nombre de la referencia nombreInput y se le asigna a una variable tipo ElementRef
  @ViewChild('apellidoInput') apellidoInput: ElementRef; 

  constructor(private loggingService:LoggingService, private personasService : PersonasService){ //los servicios se inyectan al constructor usando Dependency Injection, clase 45 se importa el servicio de Personas

  } 

  agregarPersona(){ //Clase 43, se eliminan los dos parámetros
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value); //usamos this. porque son de la clase, y colocamos  .nativeElement.value para rescatar su valor
   // this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre:" + persona1.nombre +" apellido:" + persona1.apellido);
    //this.personaCreada.emit(persona1);  //clase 45, ya no se necesita emitir porque se está trabajando directamente desde un servicio, se harán en su lugar las líneas inferiores
    this.personasService.agregarPersona(persona1); //pasamos el objeto de tipo Persona
  }

}
