import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private router: Router,
      private usersService: UsersService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.usersService.currentUserValue;
      if (currentUser) {
          if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
              this.router.navigate(['/login']);
              return false;
          }

          return true;
      }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}
