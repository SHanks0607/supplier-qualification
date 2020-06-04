import { ProjectReason } from './../shared/models/project-reason-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

// Importing moodels
import { ProjectHeader } from './../shared/models/project-header-model';

// Importing mock data for the dropdown list - will get replaced with the data generated in the admin screen
import { PROJECTREASONS} from '../shared/mock-data/project-reason-data';
import { HttpClient } from '@angular/common/http';
import { ApiGatewayTest } from '../api-gateway-test';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent implements OnInit {

  newProject: FormGroup;

  projectReasons = PROJECTREASONS;

  constructor(private formBuilder: FormBuilder, private projectService: ApiGatewayTest) { }

  ngOnInit() {
    this.newProject = this.formBuilder.group({
      partNumber: ['', Validators.required],
      partRev: ['', Validators.required],
      revDate: ['', Validators.required],
      partName: ['', Validators.required],
      supplier: ['', Validators.required],
    });
  }

  onSubmit(newProject: ProjectHeader) {
    this.projectService.createProject(newProject);
    console.log(this.newProject);
  }

}
