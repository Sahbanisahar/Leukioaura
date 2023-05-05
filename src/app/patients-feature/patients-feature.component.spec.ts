import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsFeatureComponent } from './patients-feature.component';

describe('PatientsFeatureComponent', () => {
  let component: PatientsFeatureComponent;
  let fixture: ComponentFixture<PatientsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
