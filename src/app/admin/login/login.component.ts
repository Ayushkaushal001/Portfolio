import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // ✅ Fixed typo
    imports: [FormsModule] 
})
export class LoginComponent {
  password = '';

  constructor(private router: Router) {}

  login() {
    console.log("Entered Password:", this.password); // ✅ Debugging line
const adminPassword = environment.ADMIN_PASSWORD; 
    if (this.password.trim() === adminPassword ) { // ✅ Added `.trim()` to remove unwanted spaces
      localStorage.setItem('isAdmin', 'true');
   this.router.navigate(['/admin/dashboard']);// ✅ Relative Path

    } else {
      alert('Wrong password');
    }
  }
}
