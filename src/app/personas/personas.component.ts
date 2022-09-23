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
    constructor(
      private personasServices: PersonasService,
      private router:Router
    ){}
  ngOnInit(): void { 
     this.personasServices.obtenerPersonas()
     .subscribe(
      (personas: Persona[]) => {
        this.personas = personas;
        this.personasServices.setPersonas(personas);
      }
     );
  }

  agregar(){
    //clase router, servicio
    //se dirige a la ruta personas/agregar
      this.router.navigate(['personas/agregar']);
  }

}
