import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubServiceService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery: string;
  public githubProfile: any;
  public githubRepos: any[];
  public errorMessage: string;


  constructor(private githubService: GithubServiceService, private ngxSpinner: NgxSpinnerService) { }
  
  public searchUser() {
    //display the spinner before the server call
    this.ngxSpinner.show();
    //get github profile
    this.githubService.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data;
    }, (error) => {
      this.errorMessage = error;
    });
    //get github repos
     this.githubService.getRepos(this.githubUserQuery).subscribe((data) => {
       this.githubRepos = data;
       //stop spinner service
       this.ngxSpinner.hide();
    }, (error) => {
      this.errorMessage = error;
    });
  }

  ngOnInit(): void {
  }

}

