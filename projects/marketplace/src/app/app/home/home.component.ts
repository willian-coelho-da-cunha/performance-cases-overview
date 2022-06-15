import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'will-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router
  ) { }

  navigateToContactUs(): void {
    this.router.navigate(['/contact-us']);
  }

  navigateToWelcomeFromAngular(): void {
    this.router.navigate(['/welcome-from-angular']);
  }
}
