import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  username = '7--';

  constructor(private http: HttpClient) {}

  getApiProjects(): Observable<any[]> {
    const projectsURL = 'https://api.github.com/users/7--/repos?sort=pushed';
    return this.http.get<any[]>(projectsURL);
  }

  getRepoInfo(name: string): Observable<any[]> {
    const reposURL = 'https://api.github.com/repos/7--/' + name;
    return this.http.get<any[]>(reposURL);
  }

  getStarredProjects(): Observable<any[]> {
    const starredURL = 'https://gh-pinned-repos.now.sh/?username=7--';
    return this.http.get<any[]>(starredURL);
  }
}
