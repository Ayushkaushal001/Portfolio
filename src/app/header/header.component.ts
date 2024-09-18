import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() isScrolled!: boolean; // Input binding for scroll status

  ResumeName = 'resume.jpg';

  downloadResume() {
    let url = window.location.href;
    window.open(url + '/../assets/resume/' + this.ResumeName, '_blank');
  }

scroll(el: string) {
  const element = document.getElementById(el);
  if (element) {
    const headerOffset = 76; // Adjust this value based on your header's height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

}


