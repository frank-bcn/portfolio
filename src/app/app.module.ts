import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectComponent } from './pages/project/project.component';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { FrontendComponent } from './pages/frontend/frontend.component';
import { BackendComponent } from './pages/backend/backend.component';
import { ExtraComponent } from './pages/extra/extra.component';
import { JoinComponent } from './pages/project-join/join.component';
import { ProjectPolloComponent } from './pages/project-pollo/project-pollo.component';
import { ProjectPokedexComponent } from './pages/project-pokedex/project-pokedex.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ProjectComponent,
    StartPageComponent,
    FrontendComponent,
    BackendComponent,
    ExtraComponent,
    JoinComponent,
    ProjectPolloComponent,
    ProjectPokedexComponent,
    ImprintComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
