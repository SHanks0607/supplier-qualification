import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecuteProjectComponent } from './execute-project.component';

describe('ExecuteProjectComponent', () => {
  let component: ExecuteProjectComponent;
  let fixture: ComponentFixture<ExecuteProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecuteProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecuteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
