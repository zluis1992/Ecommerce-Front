import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ServicesService } from '../services.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private service: ServicesService, private router: Router ){

  }

  canActivate(): boolean {
    if (!this.service.isAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }

}
