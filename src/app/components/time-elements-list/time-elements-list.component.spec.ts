import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeElementsListComponent } from './time-elements-list.component';

describe('TimeElementsListComponent', () => {
  let component: TimeElementsListComponent;
  let fixture: ComponentFixture<TimeElementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeElementsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeElementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
