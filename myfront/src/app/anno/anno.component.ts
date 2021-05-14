import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 



@Component({
  selector: 'app-anno',
  templateUrl: './anno.component.html',
  styleUrls: ['./anno.component.css']
})
export class AnnoComponent implements OnInit {
  
  constructor(public http:HttpClient, ) { 
    
  }
  
  
  
  list:any = []; //api 받아오기
  listTitle:any = [];
  totalPageNum: number = 0; //페이지 개수
  oriPageArr: any[] = [1,2,3,4,5];//원래 페이지 갯수
  pageArr: any[] = [1,2,3,4,5];
  paramPageNum:number = 1; //api pageNum 파라미터
  totalNum:number = 0;//총 게시물 개수
  nextPageNum:number = 1; //페이지 5쪽 건너뛰기 
  samePage:boolean=false; //클릭한 페이지 보라색 되게끔
  pageJump:number = 1; //다음쪽
  lastPage:number = 0; //마지막페이지 배열
  pageMath:number = 0;
  lastPageArr: any =[];
  disLeft:any = "none" ; 
  disRight:any = "inline-table" ; 
  searchWord: any;

  
  ngOnInit(): void {
    
    this.http.get<any>(`http://localhost:3000/board/anno?pageNum=${this.paramPageNum}`).subscribe(data=>{
      this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      this.totalNum=data.result[1][0].num
      if(this.totalPageNum%5 == 0){
        this.pageMath = this.totalPageNum/5;
        this.lastPage = (this.pageMath)*5-4;
        
        for(let i=0; i<5; i++){
          this.lastPageArr.push(this.lastPage+i);
        }
      }else{
        this.pageMath = Math.floor(this.totalPageNum/5);
        this.lastPage = (this.pageMath)*5+1;
        
        for(let i=1; i<=this.totalPageNum%5; i++){
          this.lastPageArr.push(this.pageMath*5+i);
        }

      }
      if(this.lastPage ==1){
        this.pageArr = this.lastPageArr
        this.disRight = "none";
      }
      console.log(" this.lastPage: "+ this.lastPage)
      console.log("onInit")
      
    })
  }

  search(){
    this.searchWord = (<HTMLInputElement>document.getElementById("autocomplete-input")).value;
    console.log("searchWord: "+this.searchWord)
    this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.paramPageNum).subscribe(data=>{
      this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      
      
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

    this.pageJump = (5*(this.nextPageNum))+1
    console.log("this.lastPage :"+this.lastPage )
    console.log("this.pageJump :"+this.pageJump )
    if(this.lastPage > this.pageJump){
      ++this.nextPageNum
      this.disLeft = "inline-table" ; 

      for( let i = 0; i< this.pageArr.length;i++){
            this.pageArr[i] = this.pageJump+i; 
            this.oriPageArr[i] = this.pageJump+i;
            console.log("this.pageArr[i] :"+this.pageArr[i] )
          } 
          console.log("2222222222222222222222")
          this.getAnnoApi()

    }else if(this.lastPage == this.pageJump){
      this.disRight = "none";
      this.disLeft = "inline-table" ; 
      this.pageArr=this.lastPageArr; 
      this.getAnnoApi()
    }
  }



  
  backPage(){
    
    if(this.lastPage  == this.pageJump){
      if(this.lastPage == 6){
        this.disLeft = "none";
      }
      this.disRight = "inline-table" ; 
      this.pageJump -=5;
      this.pageArr=this.oriPageArr; 
      for( let i = 0; i< this.pageArr.length;i++){
        this.pageArr[i] = this.pageJump+i; 
        this.oriPageArr[i] = this.pageJump+i;
        console.log("this.pageArr[i] :"+this.pageArr[i] )
      } 
      
      this.getAnnoApi()
      
      
    }else if(1 == this.pageJump){
      this.disLeft = "none";
      this.getAnnoApi()
      
     
    }else{
      this.disRight = "inline-table" ; 
      this.pageJump -=5;
      for( let i = 0; i< this.pageArr.length;i++){
        this.pageArr[i] = this.pageJump+i; 
        this.oriPageArr[i] = this.pageJump+i;
        console.log("this.pageArr[i] :"+this.pageArr[i] )
       
      } 
      this.getAnnoApi()
      
      --this.nextPageNum
      if(1 == this.pageJump){
        this.disLeft = "none";
        
      }
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


  getAnnoApi():void{
    this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.pageJump).subscribe(data=>{
      this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      this.paramPageNum=this.pageJump;
      console.log("pageJump: "+this.pageJump)
      console.log("nextPageNum: "+this.nextPageNum)
      
    })  
  }







}
