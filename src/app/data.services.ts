import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()//se usa porque se va a inyectar un servicio dentro de este servicio
export class DataServices{
    constructor(private httpClient:HttpClient){}

    cargarPersonas(){
        //se encarga de regresar el arreglo de datos almacenado en la base de datos
        return this.httpClient.get<Persona[]>('https://listado-personas-7306e-default-rtdb.firebaseio.com/datos.json'); //regresa un objeto de tipo observable, por tal hay que usar subscribe al método para recuperar la infirmación
    }

    //guardamos el arreglo de personas
    guardarPersonas(personas: Persona[]){
        //tomamos la ruta de al base de datos firebase ||| todas las url deben terminar en '.json', post agrega nuevas peticiones, put modifica la petición existente
        //this.httpClient.post('https://listado-personas-7306e-default-rtdb.firebaseio.com/datos.json', personas)
        this.httpClient.put('https://listado-personas-7306e-default-rtdb.firebaseio.com/datos.json', personas)
        .subscribe(
            response => console.log("resultado guardar Personas" + response),
            error => console.log("Error al guardar Personas" + error)
        );


    }


}