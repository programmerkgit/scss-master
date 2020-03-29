import { Component } from '@angular/core';


interface Link {
  url: string;
  display?: string;
}

type Links = Link[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'scss-master';
  links: Links = [
    {url: 'function-scss', display: ''},
    {url: 'import-scss'},
    {url: 'use-rule'},
  ];
}
