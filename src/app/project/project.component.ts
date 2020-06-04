import { Observable, Subscription } from 'rxjs';
import { ApiGatewayTest } from './../api-gateway-test';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProjectHeader } from '../shared/models/project-header-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // projectId: string;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private projectService: ApiGatewayTest) {

  }

  ngOnInit(): void {
    const projectId = this.route.params.subscribe( params => {
      console.log(params);
      });
  }


}




