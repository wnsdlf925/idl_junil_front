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

  
  constructor(public http:HttpClient) { }
  
  
  list:any = [];
  listTitle:any = [];
  totalPageNum: number=0; //페이지 개수
  pageArr: number[] = [1,2,3,4,5];
  paramPageNum:number = 1; //api pageNum 파라미터
  totalNum:number = 0;//총 게시물 개수
  samePage:boolean=false;
  
  ngOnInit(): void {
    
    this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.paramPageNum).subscribe(data=>{
      this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      this.totalNum=data.result[1][0].num
      console.log("pageNum:"+this.totalPageNum)
      
      
    })
    
    
  }
  
  
  
  changePage(a:number){
    this.paramPageNum = a;
    this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.paramPageNum).subscribe(data=>{
      this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      console.log("pageNum:"+this.totalPageNum)
      
    })
  
  }
  

  pagePoint(a:number){
    console.log("paramPageNum:"+this.paramPageNum)
    console.log("a:"+a)
    console.log("----------------------------------------------")
    if(this.paramPageNum == a){
      this.samePage=true;
      return this.samePage
    }else{
      this.samePage=false;
      return this.samePage
    }
  }










}
