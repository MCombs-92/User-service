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

  create(user: User): Observable<Boolean> {
    return this.http.post(this.url+"Create", user) as Observable<Boolean>;
  }

  change(user: User): Observable<Boolean> {
    return this.http.post(this.url+"Change", user) as Observable<Boolean>;
  }

  remove(user: User): Observable<Boolean> {
    return this.http.post(this.url+"Remove", user) as Observable<Boolean>;
  }

  constructor(private http: HttpClient ) { }
}
