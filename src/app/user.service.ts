import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:50221/Users/"

  list(): Observable<User[]>{
    return this.http.get(this.url+"List") as Observable<User[]>;
  }

  get(id: number): Observable<User> {
    return this.http.get(this.url+"Get/"+id) as Observable<User>;
  }

  constructor(private http: HttpClient ) { }
}
