import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  private authSubscription: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {
     }

  ngOnInit() {
      this.authSubscription = this.authService.isLoggedIn$.subscribe(isLoggedIn => {
          this.isLoggedIn = isLoggedIn;
      });
      this.authService.logout();
  }

  ngOnDestroy() {
      if (this.authSubscription) {
          this.authSubscription.unsubscribe();
      }
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
  }

}
