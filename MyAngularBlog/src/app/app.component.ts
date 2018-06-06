import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier Post' ,
      content: 'Je fais un blog en angular!',
    },
    {
      title: 'Mon deuxieme Post' ,
      content: 'Angular c\'est cool !',
    },
    {
      title: 'Mon troisieme Post' ,
      content: 'J\'apprend à manipuler Angular!',
    }
  ];

}
