import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
 projects: any[] = [];

ngOnInit() {
    this.loadProjects();
  }
  loadProjects() {
  const savedProjects: any[] = JSON.parse(localStorage.getItem('projects') || '[]');
  this.projects = savedProjects.map((proj: any) => ({
    ...proj,
    images: Array.isArray(proj.images)
      ? proj.images
      : (proj.images as string).split(',').map((img: string) => img.trim()), 
  }));

  console.log('Loaded Projects:', this.projects);
}

}



  
