import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsFeatureComponent } from './prescriptions-feature.component';

describe('PrescriptionsFeatureComponent', () => {
  let component: PrescriptionsFeatureComponent;
  let fixture: ComponentFixture<PrescriptionsFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionsFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionsFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
