import { Component, OnInit } from '@angular/core';
//import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
 
  constructor(private loginService: LoginService){}
 
  ngOnInit(): void {
   firebase.initializeApp({
    apiKey: "AIzaSyASpOssqC_ZPyb2QRwGwtoUd9wdAKTrCto",
    authDomain: "listado-personas-7306e.firebaseapp.com",
   })
  }
 
  isAutenticado(){
    return this.loginService.isAutenticado();
  }
 
  salir(){
    this.loginService.logout();
  }
 
}
