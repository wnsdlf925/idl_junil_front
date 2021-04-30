
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

  sideBtn = false;
    
  
  onside():void{
   this.sideBtn = true;
    console.log(this.sideBtn)
   
   }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  
  
  
  title = 'myfront';
  
}
