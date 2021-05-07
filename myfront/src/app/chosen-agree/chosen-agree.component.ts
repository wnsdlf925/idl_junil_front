import { Component, OnInit } from '@angular/core';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-chosen-agree',
  templateUrl: './chosen-agree.component.html',
  styleUrls: ['./chosen-agree.component.css']
})
export class ChosenAgreeComponent implements OnInit {



  chosen1 : boolean = false;
  chosen2 : boolean = false;




  check1():void{
    this.chosen1=!this.chosen1;
    console.log(this.chosen1)
    
  }
  check2():void{
    this.chosen2=!this.chosen2;
    console.log(this.chosen2)
    
  }
 
  agree():void{
    if(this.chosen1 ==true && this.chosen2==true){
      this.router.navigate(["/member/join"]);
      
    }else{
      alert("필수란에 체크해야함")
      
    }
  }
  


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

}
