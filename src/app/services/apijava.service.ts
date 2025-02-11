import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {NotaPost} from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class ApijavaService {
  private userSubject = new BehaviorSubject<any | null>(null);
  user$: Observable<any | null> = this.userSubject.asObservable();

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(email: string) {
    this.http.get<NotaPost[]>(this.apiUrl + '/users/' + email).subscribe(
      user => {
        this.setUser(user);
      }
    )
  }

  setUser(userData: any) {
    this.userSubject.next(userData);
  }

}
