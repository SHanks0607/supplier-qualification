import { ApiGatewayTest } from './../api-gateway-test';
import { Component, OnInit } from '@angular/core';
import { ProjectHeader } from '../shared/models/project-header-model';

@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss']
})
export class ProjectTableComponent implements OnInit {
  projectList: ProjectHeader[] = [];
  displayedColumns: string[] = ['partNumber', 'partName', 'partRev', 'revDate'];

  constructor(private projectService: ApiGatewayTest) { }

  ngOnInit() {

  }

  getProjectList() {
    this.projectService.getProjects()
      .subscribe((responseData) => {
        this.projectList = responseData;
      }
    );
  }

  testClick() {

  }

}
