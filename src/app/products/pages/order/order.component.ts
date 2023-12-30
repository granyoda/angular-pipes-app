import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = 'name';

  public heroes: Hero[]= [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Moonight',
      canFly: false,
      color: Color.white
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Green Lanter',
      canFly: true,
      color: Color.green
    },
    {
      name: 'Flash',
      canFly: false,
      color: Color.red
    },
  ]

  toogleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero): void{
    this.orderBy = value;
  }
}
