import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProjectComponent } from './approve-project.component';

describe('ApproveProjectComponent', () => {
  let component: ApproveProjectComponent;
  let fixture: ComponentFixture<ApproveProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
