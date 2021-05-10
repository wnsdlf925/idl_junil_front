import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// const endpoint = 'Rest API Adress';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

@Injectable()

export class AnnoService {

  annoUrl = 'localhost:3000/board/anno?pageNum=1';

  
  constructor(private http: HttpClient) { }
  
  getBookList(): Observable<any> {
    return this.http.get(this.annoUrl).pipe(map((books: any) => books.items || []));

    
  }
    
   
  
}