import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCalendarComponent } from './dynamic-calendar.component';

describe('DynamicCalendarComponent', () => {
  let component: DynamicCalendarComponent;
  let fixture: ComponentFixture<DynamicCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
