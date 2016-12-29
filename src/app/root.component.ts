/**
 * The root component of the application. This will be
 * loaded first and contains the router outlet.
 * 
 * @module AppModule
 */ /** */
import { Component } from '@angular/core';

@Component({
    selector: 'starter-root',
    template: `
  <div id="main" class="col-md-10 offset-md-1">
    <router-outlet></router-outlet>
  </div>
  `
})
export class RootComponent {}
