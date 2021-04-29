import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  
// modal_btn(){

//     window.onload = function() {
      
//       function onClick() {
//         if(document.querySelector('.modal_wrap')){ document.querySelector('.modal_wrap').style.display ='block'; }


//         document.querySelector('.modal_wrap')!.style.display ='block';
//         document.querySelector('.black_bg')!.style.display ='block';
//       }   
//       function offClick() {

//         document.querySelector('.modal_wrap').style.display ='none';
//         document.querySelector('.black_bg').style.display ='none';
//       }
      
//       document.getElementById('modal_btn')!.addEventListener('click', onClick);
//       document.querySelector('.modal_close')!.addEventListener('click', offClick);
      
//     };
//   } 


  constructor() { }

  ngOnInit(): void {
  }

}
