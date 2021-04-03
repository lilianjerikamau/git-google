import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry,catchError } from 'rxjs/operators'; 
import { CLIENT_SECRET, CLIENT_ID } from 'src/app/cred.module';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {
  handleErrors: any;

  constructor(private httpclient: HttpClient) { }

  public getProfile(searchQuery): Observable<any>{
    let dataURL = `https://api.github.com/users/${searchQuery}?client_id${CLIENT_ID}&client_secret${CLIENT_SECRET}`;
    return this.httpclient.get<any>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }
   public getRepos(searchQuery): Observable<any[]>{
    let dataURL = `https://api.github.com/users/${searchQuery}/repos?client_id${CLIENT_ID}&client_secret${CLIENT_SECRET}`;
    return this.httpclient.get<any[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }
}

