import { Component,OnInit } from '@angular/core';
import { AboutComponent } from './../about/about.component';
import { ExperienceComponent } from './../experience/experience.component';
import { ContactComponent } from './../contact/contact.component';
import { ProjectsComponent } from './../projects/projects.component';
import { HeaderComponent } from './../header/header.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule,AboutComponent,ExperienceComponent,ContactComponent,ProjectsComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

stackWords = ["M", "E", "A", "N"]; 
  isMean = true; 

  ngOnInit() {
    this.animateText();
  }

  animateText() {
    const stackElement = document.getElementById("stack");
    let index = 0;
    const interval = setInterval(() => {
      if (stackElement) {
        stackElement.textContent = this.stackWords.slice(0, index + 1).join(" "); 
        index++;
        if (index === this.stackWords.length) {
          clearInterval(interval);
          setTimeout(() => this.switchStack(), 1500); // Delay before switching MEAN ↔ MERN
        }
      }
    }, 500); // Delay between letters
  }

  switchStack() {
    this.stackWords = this.isMean ? ["M", "E", "R", "N"] : ["M", "E", "A", "N"];
    this.isMean = !this.isMean;
    this.animateText();
  }
}
