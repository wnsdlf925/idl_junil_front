
import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInAnimation
  ],
  host: { '[@fadeInAnimation]': '' }
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  
  
  title = 'myfront';
  
}
