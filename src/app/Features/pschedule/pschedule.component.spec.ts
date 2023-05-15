import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PscheduleComponent } from './pschedule.component';

describe('PscheduleComponent', () => {
  let component: PscheduleComponent;
  let fixture: ComponentFixture<PscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PscheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
