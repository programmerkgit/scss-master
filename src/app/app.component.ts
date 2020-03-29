import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'scss-master';
  links = [
    {url: 'function-scss', display: ''},
    {url: 'import-scss'},
  ];
}
