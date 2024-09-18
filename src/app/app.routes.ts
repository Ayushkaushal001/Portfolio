import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
	{path : 'home' , component : HomeComponent},
		{path : '' , component : HomeComponent},
		{path : 'header' , component : HeaderComponent},
		
	];
