import { Component, OnInit } from '@angular/core'; //clase 45 se eleimina Output y EventEmitter pues no se van a utilizar porque se usará un servicio
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../loggingService.service'; //lo añade automáticamente ángular usando dependency injection, ya se importó globalmente en app.module.ts, no hay necesidad de importarlo por clase
import { Persona } from '../../persona.model'; //importamos clase Persona
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
 // providers: [LoggingServices] //especificando que se va a tener un proveedor de servicio, ya se especificó globalmente en app.module.ts, no hay necesidad de especificarlo por clase
})
export class FormularioComponent implements OnInit{
 
  nombreInput:string = ''; //se habilita en clase 48 para usar two way bidding 
  apellidoInput:string = '';
  index:number;
  /*
  @ViewChild('nombreInput') nombreInput: ElementRef;  //se importa este decorador, se pone como parámetro el nombre de la referencia nombreInput y se le asigna a una variable tipo ElementRef
  @ViewChild('apellidoInput') apellidoInput: ElementRef; 
*/
  constructor(private loggingService:LoggingService, private personasService : PersonasService,
    private router:Router, private route:ActivatedRoute){ //los servicios se inyectan al constructor usando Dependency Injection, clase 45 se importa el servicio de Personas
    this.personasService.saludar.subscribe((indice: number) => alert("El indice es: " + indice)); //subscribiéndose al evento que se está emitiendo saludar es emiter
  } 

  ngOnInit(): void {
      //recuperar índice seleccionado
    this.index = this.route.snapshot.params['id']; //el nombre de id es el mismo de app-routing, ya que se está recuperando esa información 
    if (this.index){
      //para recuperar el objeto persona del arreglo proporcionando el índice, con el método de la clase personasService y le pasamos el índice, con el objeto persona llenamos los campos del fomulario con input
      let persona : Persona = this.personasService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){ //Clase 43, se eliminan los dos parámetros, clase 66, al editar no duplica
    let persona1 = new Persona(this.nombreInput, this.apellidoInput); 
    if(this.index){
      this.personasService.modificarPersona(this.index, persona1);
    }else{
      this.personasService.agregarPersona(persona1);//pasamos el objeto de tipo Persona
    }
   // this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre:" + persona1.nombre +" apellido:" + persona1.apellido);
    //this.personaCreada.emit(persona1);  //clase 45, ya no se necesita emitir porque se está trabajando directamente desde un servicio, se harán en su lugar las líneas inferiores
    //clase 64 rutas, al dar clic y que a la vez se ejecuta este método onGuardarPersona, nos redirigirá a la ruta personas
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if (this.index != null){
      this.personasService.eliminarPersona(this.index);
    }
    //después de eliminar, nos redirige al listado de personas haciendo esto
    this.router.navigate(['personas']);
  }

}
