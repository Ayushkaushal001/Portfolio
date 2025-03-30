import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('isAdmin') === 'true') {
      return true; // ✅ Allow access
    } else {
      this.router.navigate(['/admin/login']); // ✅ Redirect to login
      return false;
    }
  }
}
