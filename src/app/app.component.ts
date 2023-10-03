// Note: Template and Styles
// - there is only 1 template but many style (using [])
// - can use inline or external file

// Note: Selector (attribute selector)
// - must be unique
// - can be multiple selectors (use [])
  // - attribute selection, e.g. [attributeName]
  // - by class, e.g. ['.className]
  // - by id and pseudo-selectors won't work with Angular
  // - commone use is to create component and elements and use it in Angular



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`  // inline style - not commonly used
  // h1 {
  //   color: blue;
  // }
  // `]
})
export class AppComponent {
 
}
