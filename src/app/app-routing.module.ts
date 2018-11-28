import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkComponent } from './components/work/work.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';

const routes : Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'work', component: WorkComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
	imports: [ 
	RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule{}
