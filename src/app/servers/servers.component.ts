import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

}

// using inline template and style (not external files)

// @Component({
//   selector: 'app-servers',
//   template:`
//   using inline template 
//   <app-server></app-server>`,    // remove 'Urls' and use ``
//   styles: [`
//   h2, h3 {
//     color: dodgerblue;
//   }
//   `]
// })

// export class ServersComponent {

// }
