import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  public name: string = 'Juan Antonio';
  public gender: 'hombre'| 'mujer' = 'hombre';
  public invitationMap = {
    hombre: 'invitarlo',
    mujer : 'invitarla'
  }

  public chageClient(): void{
    this.name = 'Graciela';
    this.gender = 'mujer';
  }

  //i18nPlural
  public clientes: string[] = ['Hugo', 'Paco', 'Luis', 'Juan', 'Carlos'];
  public clientesMap= {
    '=0': 'no tenemos nungún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando'
  }
  public borrarCleinte(): void{
    this.clientes.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Juan Antonio',
    age: 25,
    pais: 'México'
  }

  //Async PIPE
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}
