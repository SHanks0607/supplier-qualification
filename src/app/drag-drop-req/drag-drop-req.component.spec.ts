import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropReqComponent } from './drag-drop-req.component';

describe('DragDropReqComponent', () => {
  let component: DragDropReqComponent;
  let fixture: ComponentFixture<DragDropReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
