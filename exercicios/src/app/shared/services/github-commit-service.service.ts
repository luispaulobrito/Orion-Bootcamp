import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubCommitsService {

  apiUrl: string = 'https://api.github.com/repos/luispaulobrito/Orion-Bootcamp/commits';

  constructor(private http: HttpClient) { }

  getCommits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
