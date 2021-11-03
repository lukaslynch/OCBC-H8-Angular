import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string = 'http://localhost:4000/'

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  addEmployee(user: Employee): Observable<any>{
    const api = `${this.endpoint}Users`;
    return this.http.post(api, user).pipe( catchError(this.handleError))
  }

  getEmployee(): Observable<any>{
    const api = `${this.endpoint}Users`
    return this.http.get(api).pipe(
      map((res:any) => {
        return res || {}
      }), catchError(this.handleError)
    )
  }

  employeeById(id:number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    return this.http.get(api).pipe(
      map((res:any)=>{
        return res || {}
      }), catchError(this.handleError)
    )
  }

  updateEmployee(user: Employee, id: number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    console.log(user)
    return this.http.put(api, user)
  }

  deleteEmployee(id:number): Observable<any>{
    const api = `${this.endpoint}Users/${id}`;
    alert("Data telah dihapus!")
    return this.http.delete(api, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    })
  }

  handleError(error: HttpErrorResponse){
    let msg = '';
    if(error.error instanceof ErrorEvent){
      msg = error.error.message;
    }else{
      msg = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    alert(msg)
    return throwError(msg)
  }
}
