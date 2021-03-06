import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRouteGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate() {
    if( !this.authService.isLoggedIn() ) {
       // this.router.navigateByUrl('/login');
        return this.router.parseUrl('/login');
    }
    return true;
  }
}
