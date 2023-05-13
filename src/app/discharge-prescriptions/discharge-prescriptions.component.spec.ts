import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargePrescriptionsComponent } from './discharge-prescriptions.component';

describe('DischargePrescriptionsComponent', () => {
  let component: DischargePrescriptionsComponent;
  let fixture: ComponentFixture<DischargePrescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DischargePrescriptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DischargePrescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
