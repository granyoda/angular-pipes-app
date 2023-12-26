import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower : string = 'juan antonio';
  public nameUpper : string = 'JUAN ANTONIO';
  public fullName : string = 'juAN anTOniO';

  public customDate: Date = new Date();

}
