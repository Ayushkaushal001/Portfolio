import { Component,OnInit} from '@angular/core';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {
  currentYear!: number; // Tell TypeScript this will be initialized later

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
