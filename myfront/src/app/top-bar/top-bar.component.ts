import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  
})


export class TopBarComponent implements OnInit {
  
  
  
  sideBtn = false;
  
  onside():void{
    this.sideBtn = true;
     console.log(this.sideBtn)
    
    }

    offside():void{
       this.sideBtn = false;
      console.log(this.sideBtn)
       
     }
  
  
  
  
  constructor() { }
  
  ngOnInit(): void {
    
    
    
    
    
  }

}


