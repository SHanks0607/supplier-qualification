import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { ProjectHeader } from './shared/models/project-header-model';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayTest {

  private apiGatewayTest = 'https://prototype-c1476.firebaseio.com/projects.json';

  constructor(private httpClient: HttpClient) { }

  createProject(project: ProjectHeader) {
    console.log('hi');
    return this.httpClient.post(this.apiGatewayTest, project)
      .subscribe(response => {
        console.log(response);
      }
      );

  }


  getProjects(): Observable<ProjectHeader[]> {
    return this.httpClient.get<ProjectHeader[]>(this.apiGatewayTest)
      .pipe(
        map((responseData: ProjectHeader[]) => {
          const projectArray: ProjectHeader[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              projectArray.push({...responseData[key], projectId: key});
            }
          }
          return projectArray;
        })
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; try again later.');
  }
}
