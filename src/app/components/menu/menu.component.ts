import {Component, inject} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatAnchor, MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {ApijavaService} from '../../services/apijava.service';
import {Observable} from 'rxjs';
import {user, User} from '@angular/fire/auth';
import {HttpClient} from '@angular/common/http';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  private auth = inject(AuthService);
  user$: Observable<User | null>;


  constructor() {
    this.user$ = this.auth.user$;
  }

  logout(){
    // Aquí haremos logout
    this.auth.logout();
  }

  protected readonly user = user;
}
