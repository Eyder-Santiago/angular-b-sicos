import { Component, EventEmitter, Output } from '@angular/core';
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

  agregarPersona(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement){ //Clase 42, recibe 2 parámetros #nombreInput, #apellidoInput
    let persona1 = new Persona(nombreInput.value, apellidoInput.value); //nombreInput y apellidoInput, guarda la información que se haya escrito en el campo de texto, clase 42, se elimina this. y agregamos . al final, ya que no son atributos de la clase sino parámetros del método-función
    //this.personas.push(persona1); //ingresamos el objeto al arreglo de personas Persona[], no se puede acceder al arreglo personas desde Component hijo Form, se hará de otra manera
    this.personaCreada.emit(persona1);  //objeto tipo Persona que queremos propagar de componente hijo a componente padre, todo esto reemplaza línea anterior
  }

}
