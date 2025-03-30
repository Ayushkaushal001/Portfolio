import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
 import { ProjectsComponent } from './projects/projects.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HeaderComponent,
    // ProjectsComponent, NgbModule,
    ExperienceComponent,
    ContactComponent,
    AboutComponent,
    CarouselModule,
    

  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
isAdminRoute:boolean = false;
  isScrolled = false;

 constructor(private router: Router) {
    // Detect if the current route contains "admin"
    this.router.events.subscribe(() => {
      this.isAdminRoute = this.router.url.startsWith('/admin');
    });
  }


  // Listen for scroll event
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollY > 50; // Toggle based on scroll position
    console.log('Scrolled:', this.isScrolled);
  }

  ngOnInit() {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 0
    });
  }

  ngAfterViewInit(): void {
    // Listen to scroll and refresh AOS
    window.addEventListener('scroll', this.onScroll.bind(this), true);
  }

  onScroll(): void {
    AOS.refresh(); // Refresh AOS on scroll
  }

  // Other functionality
  title = 'frontend';

  animateIconsAndLines() {
    // Animate the vertical lines first
    const lines = document.querySelectorAll('.vertical-line');
    lines.forEach(line => {
      if (line) {
        line.classList.add('line-grow');
      }
    });

    // Once the lines have grown, show the icons one by one
    setTimeout(() => {
      const icons = document.querySelectorAll('.icon');
      icons.forEach((icon, index) => {
        setTimeout(() => {
          icon.classList.add('show');
        }, index * 200); // Delay each icon appearance
      });
    }, 500); // Wait for the lines to grow first
  }
}
