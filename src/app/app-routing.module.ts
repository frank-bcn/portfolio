import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent, data: { animation: 'start' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'skills', component: SkillsComponent, data: { animation: 'skills' } },
  { path: 'projects', component: ProjectComponent, data: { animation: 'projects' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

