import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona; //pasando información de componente padre a componente hijo
  @Input() indice: number;   //pasando información de componente padre a componente hijo
  constructor(private personasService: PersonasService) { }

  ngOnInit(): void {
  }
  emitirSaludo(){ //método para el botón editar
    this.personasService.saludar.emit(this.indice); //emitiendo el índice del saludo
  }

}
