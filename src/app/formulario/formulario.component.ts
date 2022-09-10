import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model'; //importamos clase Persona

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
    //Para reportar la información que un componente hijo cree, funcion agregarPersona(), usamos el decorador @output
    @Output() personaCreada = new EventEmitter<Persona>(); //eventEmitter se encarga de crear un mensaje, de comunicar la información que vamos a agregar desde componente hijo a componente padre, e indicamos a EventEmitter que vamos a crear objetos de tipo Persona

  //nombreInput:string = ''; se quita en clase 42, pues no se utilizará two way bidding 
  //apellidoInput:string = '';
  @ViewChild('nombreInput') nombreInput: ElementRef;  //se importa este decorador, se pone como parámetro el nombre de la referencia nombreInput y se le asigna a una variable tipo ElementRef
  @ViewChild('apellidoInput') apellidoInput: ElementRef; 

  agregarPersona(){ //Clase 43, se eliminan los dos parámetros
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value); //usamos this. porque son de la clase, y colocamos  .nativeElement.value para rescatar su valor
    //this.personas.push(persona1); //ingresamos el objeto al arreglo de personas Persona[], no se puede acceder al arreglo personas desde Component hijo Form, se hará de otra manera
    this.personaCreada.emit(persona1);  //objeto tipo Persona que queremos propagar de componente hijo a componente padre, todo esto reemplaza línea anterior
  }

}
