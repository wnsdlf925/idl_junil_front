// declare const M;

import { Collapsible } from "materialize-css";

import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-anno',
  templateUrl: './anno.component.html',
  styleUrls: ['./anno.component.css']
})
export class AnnoComponent implements OnInit {
  
  constructor(public http:HttpClient, private router: Router) { 
    
  }
  
  
  
  list:any = []; //api 받아오기
  listTitle:any = [];
  detail:any=[];//상세보기
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
  search: boolean=false; //검색단어가 공백이면 true
  contents:any = "0";
  clickContents: boolean = false;
  openpage: number =1;




  


//모두 초기화하고 oninit
  goToUrl(): void {
    
  this.search=false;
    this.pageJump = 1;
    this.samePage=false; 
    this.totalNum= 0;
    this.nextPageNum = 1;
    this.paramPageNum= 1;
    this.lastPageArr=[];
    this.oriPageArr = [1,2,3,4,5];//원래 페이지 갯수
    this.pageArr= [1,2,3,4,5];
    this.disLeft = "none" ; 
    this.disRight = "inline-table" ; 
    this.ngOnInit()
  }
  

  ngOnInit(): void {

    // document.addEventListener('DOMContentLoaded', function() {
      
    // });
  
    this.http.get<any>(`http://localhost:3000/board/anno?pageNum=1`).subscribe(data=>{
      
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

      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {});
      
    })
  }

  //검색
  annoSearch(){
   
    this.searchWord = (<HTMLInputElement>document.getElementById("autocomplete-input")).value;
    console.log("searchWord: "+this.searchWord)
    this.lastPageArr=[];
    this.http.get<any>('http://localhost:3000/board/anno/search?pageNum=1&send='+this.searchWord).subscribe(data=>{
     
     
      if(data.result == "empty"){
        
          alert("검색단어가 없습니다.")
         
          this.search = false
          this.goToUrl();

      }else if(data.result == "searchEmpty"){
        
        this.goToUrl();
        this.search = false
        console.log("this.searchEmpty:"+data.result)
      }
      else{
        this.list = data;
      this.listTitle = data.result[0];
      this.totalPageNum=data.postNum;
      this.totalNum=data.result[1][0].num
      
      this.search = true
      this.paramPageNum=this.pageJump;

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
       
      }
      
    })
    
   

  }

  
  //페이지 클릭
  changePage(a:number){
    this.paramPageNum = a;
    if(this.search){
      this.http.get<any>('http://localhost:3000/board/anno/search?pageNum='+a+'&send='+this.searchWord).subscribe(data=>{
     
     
        if(data.result == "empty"){
          alert("검색단어가 없습니다.")
          console.log("this.empty:"+ data.result)
          this.search = false
          this.goToUrl();
  
        }else if(data.result == "searchEmpty"){
          this.ngOnInit();
          this.search = false
          console.log("this.searchEmpty:"+data.result)
        }
        else{
          
          this.search = true
          this.list = data;
          this.listTitle = data.result[0];
          this.totalNum=data.result[1][0].num
          this.totalPageNum=data.postNum;
          console.log("this.totalNum:"+this.totalNum)
          console.log("this.totalNum:"+this.paramPageNum)
        }
        
      })
      
    }else{
      
      this.http.get<any>('http://localhost:3000/board/anno?pageNum='+this.paramPageNum).subscribe(data=>{
        this.list = data;
        this.listTitle = data.result[0];
        this.totalPageNum=data.postNum;
       
        
        
      })
    }

    }
    



//페이지 앞뒤
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
  



  //페이지 뒤로갈 수 있는지
  backPageAble(){
    if(this.nextPageNum>1){
      return true;
    }else{
      return false;
    }
  }

  //클릭한 페이지버튼 보라색으로 만들기
  pagePoint(a:number){
   
    if(this.paramPageNum == a){
      this.samePage=true;
      return this.samePage
    }else{
      this.samePage=false;
      return this.samePage
    }
  }

  //앞뒤쪽 페이지 이동시 api받기
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


//페이지 펼치기
openContents(a:number){
  this.openpage =a
  this.http.get<any>('http://localhost:3000/board/anno/detail?send='+this.openpage).subscribe(data=>{
    this.detail = data;
    this.contents=this.detail.result[0].anno_contents
    console.log( "thisclickContents:"+this.clickContents)
   
    // this.checkContents()
    this.clickContents=true
    console.log( "thisclickContents:"+this.clickContents)
   
   
  })  
  
}

checkContents():boolean{
  if(this.openpage==this.detail.result[0].anno_id){
    this.clickContents=true
    return this.clickContents
   
  }else{
    this.clickContents=false
    return this.clickContents
  }
  

}




 

 


}
