import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargePrescriptionsDetailsComponent } from './discharge-prescriptions-details.component';

describe('DischargePrescriptionsDetailsComponent', () => {
  let component: DischargePrescriptionsDetailsComponent;
  let fixture: ComponentFixture<DischargePrescriptionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargePrescriptionsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargePrescriptionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
