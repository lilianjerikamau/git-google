import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component'; 
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
// import { GithubProfileComponent } from './components/github-profile/github-profile.component';
// import { AppComponent } from './app.component';
import { GithubAppComponent } from './components/github-app/github-app.component';



const routes: Routes = [
  // { path: 'home', component: GithubAppComponent },
  // { path: 'user-profile-data', component: GithubProfileDataComponent },
  //  { path: 'user-profile-card', component: GithubProfileCardComponent },
  // {path:'user-repos', component: GithubReposComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
