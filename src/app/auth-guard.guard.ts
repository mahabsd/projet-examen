import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { GuardserviceService } from './service/guardservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard   {
  
  constructor(public auth: GuardserviceService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['localhost:4200']);
      return false;
    }
    return true;

}
}
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    //     return true;}

    
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    //     const isSignedIn = this._session.isSignedIn();

    //     if (isSignedIn !== true) {
    //         this._router.navigate(["/child1"]);
    //     }

    //     return isSignedIn;

    // }
