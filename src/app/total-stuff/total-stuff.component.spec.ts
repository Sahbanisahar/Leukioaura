import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStuffComponent } from './total-stuff.component';

describe('TotalStuffComponent', () => {
  let component: TotalStuffComponent;
  let fixture: ComponentFixture<TotalStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalStuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
