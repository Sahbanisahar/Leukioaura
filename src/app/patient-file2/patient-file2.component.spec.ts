import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFile2Component } from './patient-file2.component';

describe('PatientFile2Component', () => {
  let component: PatientFile2Component;
  let fixture: ComponentFixture<PatientFile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientFile2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientFile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
