import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AdminService {
  #_isAdmin = false;
  enableRedirect = false;

  constructor(private router: Router) {
  }

  get isAdmin(): boolean {
    return this.#_isAdmin;
  }

  set isAdmin(newValue: boolean) {
    this.#_isAdmin = newValue;

    this.routeAwayFromAdmin();
  }

  private routeAwayFromAdmin(): void {
    if (this.enableRedirect && !this.#_isAdmin &&
        this.router.url.startsWith('/misc/guards/admin')) {
      console.log('Redirecting');
      this.router.navigateByUrl('/misc/guards/user');
    }
  }
}
