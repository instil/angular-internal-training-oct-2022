import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AdminService} from './admin.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

// INTERESTING: Guard classes allow us to attach behaviours to roots
//              This guard only allows activation if the user is an admin
@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private adminService: AdminService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Checking CanActivate for Admin');
    if (!this.adminService.isAdmin) {
      // INTERESTING: We can return a link to redirect to
      return this.router.parseUrl('/misc/guards');
    }
    return true;
  }
}
