import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PokedexComponent } from './components/projects/pokedex/pokedex.component';
import { PolloLocoComponent } from './components/projects/pollo-loco/pollo-loco.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { JoinComponent } from './components/projects/join/join.component';
import { BotComponent } from './components/projects/bot/bot.component';
import { StreamifyComponent } from './components/projects/streamify/streamify.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContaktInfoComponent } from './components/contact/contakt-info/contakt-info.component';
import { MessageFormComponent } from './components/contact/message-form/message-form.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SocialComponent } from './components/footer/social/social.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    PokedexComponent,
    PolloLocoComponent,
    CertificateComponent,
    JoinComponent,
    BotComponent,
    StreamifyComponent,
    ContactComponent,
    ContaktInfoComponent,
    MessageFormComponent,
    ImprintComponent,
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
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
