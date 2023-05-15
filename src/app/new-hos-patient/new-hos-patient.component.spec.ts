import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHosPatientComponent } from './new-hos-patient.component';

describe('NewHosPatientComponent', () => {
  let component: NewHosPatientComponent;
  let fixture: ComponentFixture<NewHosPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHosPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHosPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
