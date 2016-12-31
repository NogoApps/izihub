import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { TagComponent } from './tag/tag.component';
import { LoginComponent } from './login/login.component';
import { TutorialsPageComponent } from './tutorials-page/tutorials-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PresentationPageComponent } from './presentation-page/presentation-page.component';
import { routing } from './app.routing';
import { NewTutorialComponent } from './new-tutorial/new-tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleListComponent,
    ArticleComponent,
    TagComponent,
    LoginComponent,
    TutorialsPageComponent,
    AboutPageComponent,
    PresentationPageComponent,
    NewTutorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
