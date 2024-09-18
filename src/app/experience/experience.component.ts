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
    Company: 'InfoWiz',
    Dates: 'September 2023 - Present',
    Descriptions: [
      'Led a team of 10 students in a full-stack web development project, resulting in a successful product launch.',
      'Developed interactive tutorials and exercises to enhance student learning outcomes.',
      'Provided mentorship and guidance to students on project management and problem-solving skills.'
    ]
  },
  {
    Tab: 'Personal Projects',
    Role: 'Full-Stack Developer',
    Company: 'Independent',
    Dates: '2023',
    Descriptions: [
      'Created a personal website showcasing my skills and projects using Angular and Bootstrap.',
      'Built a real-time chat application with Node.js and Socket.IO.',
      'Developed a machine learning model for image classification using TensorFlow.js.'
    ]
  }
];
}
