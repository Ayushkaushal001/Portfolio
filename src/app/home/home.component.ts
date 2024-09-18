import { Component } from '@angular/core';
import { AboutComponent } from './../about/about.component';
import { ExperienceComponent } from './../experience/experience.component';
import { ContactComponent } from './../contact/contact.component';
import { ProjectsComponent } from './../projects/projects.component';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[AboutComponent,ExperienceComponent,ContactComponent,ProjectsComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
