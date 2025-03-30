import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  newProject = {
    title: '',
    description: '',
    techStack: '',
    githubLink: '',
    images: [] as string[] // Store images as array
  };

  projects: any[] = [];

  constructor(private router: Router) {
    this.loadProjects(); // Load existing projects from localStorage
  }

  loadProjects() {
    this.projects = JSON.parse(localStorage.getItem('projects') || '[]');
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length) {
      for (let file of event.target.files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.newProject.images.push(reader.result as string); // Store Base64 image
        };
      }
    }
  }

  addProject() {
    let projects = JSON.parse(localStorage.getItem('projects') || '[]');

    const newProjectData = {
      id: projects.length + 1,
      title: this.newProject.title,
      description: this.newProject.description,
      techStack: this.newProject.techStack.split(',').map(tech => tech.trim()),
      githubLink: this.newProject.githubLink,
      images: this.newProject.images, // Already in Base64
    };

    projects.push(newProjectData);
    localStorage.setItem('projects', JSON.stringify(projects));

    this.loadProjects(); // Refresh list
    alert('Project added successfully!');

    // Reset form
    this.newProject = { title: '', description: '', techStack: '', githubLink: '', images: [] };
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(this.projects));
    this.loadProjects(); // Refresh list
  }

  logout() {
  localStorage.removeItem('isAdmin'); // ✅ Token remove karo
  alert('Logged out successfully!');
  this.router.navigate(['/admin/login']); // ✅ Router se redirect karo
}

}
