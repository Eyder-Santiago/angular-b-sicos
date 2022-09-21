import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../loggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

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
    constructor(private loggingService: LoggingService, 
      private personasServices: PersonasService,
      private router:Router
    ){}
  ngOnInit(): void { //clase 45, este método se ejecuta despupes del contructor
    this.personas = this.personasServices.personas; //valor inicial arreglo vaacío línea 16, después se inicializa el método ngOnInit y se inicializa la variable this.personas con el arreglo definido en PersonasService, this.personas.Service.personas
  }

  agregar(){
    //clase router, servicio
    //se dirige a la ruta personas/agregar
      this.router.navigate(['personas/agregar']);
  }

}
