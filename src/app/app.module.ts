import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//Configuracion del local de la app
//Para registrar la hora de una zona y sus demas elementos como moneda puntuaciones, etc.
import localEspMX from '@angular/common/locales/es-MX';
import localFraCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEspMX);
registerLocaleData(localFraCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    SharedModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue: 'es-MX' }//para usar los elementos de una zona horaria y se aplique en toda la aplicación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
