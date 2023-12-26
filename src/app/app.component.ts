import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';
import { PrimeIcons, MenuItem } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  /*
  * Para instalar PrimeNG tienes que buscar la version compatible con la verison que tienes instalada de angular ya que puede marcar error
  * ( https://www.primefaces.org/primeng-v16/installation
  * https://www.primefaces.org/primeng-v16-lts/installation )
  ! npm i primeng@16.9.1
  * Luego se tienen que instalar los temas, esto se puede hacer colocando los estilos desde "angular.json" o "styles.css" como:
  ! "styles": [
  !   "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
  !   "node_modules/primeng/resources/primeng.min.css",
  ! ]

  ! @import "primeng/resources/themes/lara-light-blue/theme.css";
  ! @import "primeng/resources/primeng.css";
  *Luegon en el archivo de "app.module.ts" se tienen que colocar los importaciones tanto de los componentes como de las animaciones:
  ! import { ButtonModule } from 'primeng/button';
  ! import { BrowserModule } from '@angular/platform-browser';
  ! import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

  ! @NgModule({
  !   imports: [
  !     BrowserModule,
  !     BrowserAnimationsModule,
  !   ]
  ! })


  * Para instalar los iconos si se puede colocar el comando indicado en la documentacion (https://www.primefaces.org/primeng-v16/icons):
  !   npm install primeicons
  * Luego se importan los iconode desde el archivo "styles.css" con el comando:
  ! @import "primeicons/primeicons.css";


  * Para trabajar el css se utilizó "primeFlex" esto mediente la instalacion que se optiene de " https://primeflex.org/installation ":
  ! npm install primeflex
  * Luego en el archivo de angular se agrega la siguiente linea en styles:
  ! /node_modules/primeflex/primeflex.css || /node_modules/primeflex/primeflex.min.css
  */

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  title = 'pipesApp';
}
