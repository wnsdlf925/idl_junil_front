import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 



@Component({
  selector: 'app-anno',
  templateUrl: './anno.component.html',
  styleUrls: ['./anno.component.css']
})
export class AnnoComponent implements OnInit {
  
  constructor(public http:HttpClient) { }

  
  
  list:any = [];
  listTitle:any = [];
  totalPageNum: number = 0; //페이지 개수
  pageArr: number[] = [1,2,3,4,5];
  paramPageNum:number = 1; //api pageNum 파라미터
  totalNum:number = 0;//총 게시물 개수
  nextPageNum:number = 2; //페이지 5쪽 건너뛰기 
  samePage:boolean=false;
  pageJump:number = 0;
  
  ngOnInit(): void {
    
    this.http.get<any>(`http://localhost:3000/board/anno?pageNum=${this.paramPageNum}`).subscribe(data=>{
      this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      this.totalNum=data.result[1][0].num
      // console.log("pageNum:"+this.totalPageNum)
      console.log("onInit")
      
    })
  }
  changePage(a:number){
    this.paramPageNum = a;
    this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.paramPageNum).subscribe(data=>{
      this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      
      
    })
  }
  nextPage(){
    this.pageJump = (5*(this.nextPageNum-1))+1
    if(this.totalPageNum > this.pageJump){
      for( let i = 0; i<5;i++){
        this.pageArr[i] += 5; 
        console.log("this.pageArr[i] :"+this.pageArr[i] )
      } 
      this.nextPageNum++;
      this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.pageJump).subscribe(data=>{
        this.list = data;
        this.listTitle = data.result[0];
        this.totalPageNum=data.postNum;
        this.paramPageNum=this.pageJump;
        console.log("pageJump: "+this.pageJump)
        
      })
    }else{
      this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.totalPageNum).subscribe(data=>{
        this.list = data;
        this.listTitle = data.result[0];
        this.totalPageNum=data.postNum;
        this.paramPageNum=this.totalPageNum;
        
        console.log("over")
        
      })
    }
  }

  backPage(){
    this.pageJump = this.pageJump-5;
    if(1 <= this.pageJump){
      for( let i = 0; i<5;i++){
        this.pageArr[i] -= 5; 
        console.log("this.pageArr[i] :"+this.pageArr[i] )
      } 
      this.nextPageNum--;
      this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.pageJump).subscribe(data=>{
        this.list = data;
        this.listTitle = data.result[0];
        this.totalPageNum=data.postNum;
        this.paramPageNum=this.pageJump;
        console.log("pageJump: "+this.pageJump)
        
      })
    }else{
      // this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.totalPageNum).subscribe(data=>{
      //   this.list = data;
      //   this.listTitle = data.result[0];
      //   this.totalPageNum=data.postNum;
      //   this.paramPageNum=this.totalPageNum;
        
        
      // })
      console.log("over")
    }
  }
  backPageAble(){
    if(this.nextPageNum>1){
      return true;
    }else{
      return false;
    }
  }

  pagePoint(a:number){
   
    if(this.paramPageNum == a){
      this.samePage=true;
      return this.samePage
    }else{
      this.samePage=false;
      return this.samePage
    }
  }










}
