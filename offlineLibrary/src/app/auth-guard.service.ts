import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log(route);

    const authInfo = {
      authenticated: false
    };

    if (!authInfo.authenticated) {
      this.router.navigate(['login']);
      return false;
    }

    return true;

  }

}
