import { Requirements } from './../shared/models/requirements-model';
import { REQUIREMENTS } from './../shared/mock-data/requirement-data';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-drag-drop-req',
  templateUrl: './drag-drop-req.component.html',
  styleUrls: ['./drag-drop-req.component.scss']
})
export class DragDropReqComponent implements OnInit {

  required: Requirements[] = [];
  options: Requirements[] = REQUIREMENTS;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  sortList() {
    this.required.sort();
  }
}
