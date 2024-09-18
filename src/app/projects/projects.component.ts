import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 projects = [
    {
      id: 1,
      title: 'E-Commerce Web Application',
      description: 'I developed a fully functional e-commerce web application using the MEAN stack (MongoDB, Express.js, Angular, Node.js). The app features a user-friendly interface for browsing products, managing user accounts, and handling orders. It includes real-time data updates, a secure authentication system, and an efficient backend for processing transactions. The application ensures a seamless shopping experience with a responsive design, optimized performance, and a robust database to store user and product information.',
      techStack: ['Angular', 'MongoDB', 'Express', 'NodeJs', 'Bootstrap'],
      githubLink: 'https://github.com/Ayushkaushal001/amazon.git',
      images: ['/assets/amazon front.png', '/assets/product(A).png', '/assets/category (A).png'],
    },
    {
      id: 2,
      title: 'Netflix Clone',
      description: 'The platform features a dynamic home page, where users can discover trending shows, manage their watchlists, and view recommended content. Firebase handles user authentication and media storage, ensuring smooth performance for video streaming. I implemented advanced features like lazy loading, search functionality, and an interactive UI to mimic the original Netflix experience. Additionally, Firebase Cloud Firestore was utilized for managing user data and integrating real-time updates',
      techStack: ['Angular', 'Firebase', 'Bootstrap', 'TypeScript'],
      githubLink: 'https://github.com/Ayushkaushal001/movieZone.git',
        images: ['/assets/net home (1).png', '/assets/net home (2).png', '/assets/netflix3.png'],
    },
    {
      id: 3,
      title: 'Social Media Application',
      description: 'I created a Blog  application using the MEAN stack that allows users to share article with images, and engage with real-time content updates.  The app includes user authentication,  and  reading others artciles capabilities.  implemented an interactive user experience. The project also integrates cloud-based media storage for efficient media handling, and the backend was built with scalability in mind to support high traffic. Additional features like a news feed and profile customization were included to provide a personalized experience',
      techStack: ['Angular', 'MongoDB', 'Express', 'NodeJs', 'Bootstrap'],
      githubLink: 'https://github.com/Ayushkaushal001/magnews.git',
   images: ['/assets/blog3 (1).png', '/assets/blog3 (2).png', '/assets/blog3 (3).png'],
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'I developed a highly responsive weather forecasting application using Angular and the WeatherAPI. The application provides real-time weather data, including current conditions, hourly, and weekly forecasts. Users can search for weather in any location, and the app displays relevant weather information with an intuitive and clean UI. I integrated real-time data updates using  APIs and ensured the application remained responsive across all devices. I also implemented error handling for incorrect locations, as well as geolocation functionality to show users',
      techStack: ['Angular', 'WeatherAPI', 'Bootstrap', 'REST API'],
      githubLink: 'https://github.com/Ayushkaushal001/weather-App.git',
      images: ['/assets/weather 11.png', '/assets/weather1 (1).png'],
    },
];

}
