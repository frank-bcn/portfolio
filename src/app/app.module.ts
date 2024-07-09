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
import { MessageFormComponent } from './pages/message-form/message-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeploymentComponent } from './pages/deployment/deployment.component';
import { ProjectNetflixCloneComponent } from './pages/project-netflix-clone/project-netflix-clone.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
    MessageFormComponent,
    DeploymentComponent,
    ProjectNetflixCloneComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
