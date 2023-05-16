import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasedPatientsComponent } from './released-patients.component';

describe('ReleasedPatientsComponent', () => {
  let component: ReleasedPatientsComponent;
  let fixture: ComponentFixture<ReleasedPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasedPatientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
