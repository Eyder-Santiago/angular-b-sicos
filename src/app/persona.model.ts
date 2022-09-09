//clase Persona, se debe anteponer la palabra 'model' por buena práctica de programación
export class Persona{
    //definiendo los atributos
    /*Manera convencional
    nombre: string = '';
    apellido: string = '';
    

    constructor(nombre: string, apellido: string){
        //inicializar los atributos
        this.nombre = nombre;
        this.apellido = apellido;
    }

    
    */
   //Manera más rápida, declarando e inicializando los atributos
   constructor(public nombre: string, public apellido: string){}
}








