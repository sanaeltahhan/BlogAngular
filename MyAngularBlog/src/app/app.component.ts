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
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme Post' ,
      content: 'Je fais un blog en angular!',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon troisieme Post' ,
      content: 'Je fais un blog en angular!',
      loveIts: 0,
      created_at: new Date()
    }
  ];

}
