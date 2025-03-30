import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  active = 0;
 Experiences = [
  {
    Tab: 'Internship',
    Role: 'Instructor',
    Company: 'Infowiz Software Solutions',
    Dates: 'September 2024 - Present',
    Descriptions: [
      'Led a team of 10 students in a full-stack web development project, successfully delivering a functional product.',
      'Designed and developed interactive tutorials and coding exercises to enhance student engagement and learning.',
       'Provided mentorship in project management, debugging, and problem-solving to improve students technical proficiency.',
    ]
  },
  {
    Tab: 'Personal Projects',
    Role: 'Full-Stack Developer',
    Company: 'Independent',
    Dates: '2024',
    Descriptions: [
      'Developed an e-commerce platform using Angular, Bootstrap, Nodejs and MongoDB, implementing a user-friendly interface and secure authentication.',
      'Built Movie Zone, a movie streaming app integrated with TMDB API using React, enhancing user experience with dynamic content updates.',
        'Created a Blog App with Angular and MongoDB, allowing users to write, edit, and manage their blog posts efficiently.',
        'Developed a Weather App using Angular and MongoDB, fetching real-time weather data and providing a clean UI for users.',

    ]
  }
];
}
