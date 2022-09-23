import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()//se usa porque se va a inyectar un servicio dentro de este servicio
export class DataServices{
    constructor(private httpClient:HttpClient){}

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