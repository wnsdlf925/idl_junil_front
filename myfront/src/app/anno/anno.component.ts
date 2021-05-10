import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import {AnnoService} from './anno.component.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-anno',
  templateUrl: './anno.component.html',
  styleUrls: ['./anno.component.css']
})
export class AnnoComponent implements OnInit {

  list:any = [];
  
  constructor(public http:HttpClient) { }

  
  
  
  ngOnInit(): void {
    
    this.http.get<any>('http://localhost:3000/board/anno?pageNum=1').subscribe(data=>{
      this.list = data;
      console.log("this.list: "+this.list)
    })
   
  }

}
