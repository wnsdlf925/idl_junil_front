import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({width: "200%"}),
        animate('1000ms ease-out',style({width: "100%"}) ),
      ]),
     
    ]),
  ]
})


export class TopBarComponent implements OnInit {
  
  
  
  sideBtn = false;
  wid = "0";
  backWid = "0";
  
  onside():void{
    this.sideBtn = true;
     this.wid = "180px";
     this.backWid = "100%";
     console.log(this.sideBtn)
    
    }

    offside():void{
       this.sideBtn = false;
       this.backWid = "0px";
       this.wid = "0px";
      console.log(this.sideBtn)
       
     }


    //  wid(){
    //    return "100%"
    //  }
  
  
  
  
  constructor() { }
  
  ngOnInit(): void {
    
    
    
    
    
  }

}


