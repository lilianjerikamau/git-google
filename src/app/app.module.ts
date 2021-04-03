import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReplaceNullWithTextPipe } from './replace-null-with-text.pipe';
import { ImagePreloadDirective } from './image-preload.directive';
import { HoverDirective } from './hover.directive';
@NgModule({
  declarations: [
    AppComponent,
    GithubProfileComponent,
    GithubAppComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    GithubReposComponent,
    ReplaceNullWithTextPipe,
    ImagePreloadDirective,
      HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    NgxSpinnerModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
