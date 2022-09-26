
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './loggingService.service';
import { PersonasService } from './personas.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component'; 
import { HttpClientModule } from '@angular/common/http';
import { DataServices } from './data.services';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { LoginGuardian } from './login/login-guardian.service';
//import { LoginGuardian } from './login/login-guardian.service';
 
 
@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent,
    ErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoggingService, PersonasService, DataServices, LoginService, LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
























