import { Component, OnInit } from '@angular/core';

// Importing mock data for the dropdown list - will get replaced with the data generated in the admin screen
import { PROJECTREASONS} from '../shared/mock-data/project-reason-data';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent implements OnInit {

  projectReasons = PROJECTREASONS;

  constructor() { }

  ngOnInit(): void {
  }

}
