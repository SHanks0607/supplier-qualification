import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowBarComponent } from './workflow-bar.component';

describe('WorkflowBarComponent', () => {
  let component: WorkflowBarComponent;
  let fixture: ComponentFixture<WorkflowBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
