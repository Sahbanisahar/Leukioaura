import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFile3Component } from './patient-file3.component';

describe('PatientFile3Component', () => {
  let component: PatientFile3Component;
  let fixture: ComponentFixture<PatientFile3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFile3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFile3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
