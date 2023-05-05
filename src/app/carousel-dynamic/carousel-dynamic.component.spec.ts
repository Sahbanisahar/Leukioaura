import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDynamicComponent } from './carousel-dynamic.component';

describe('CarouselDynamicComponent', () => {
  let component: CarouselDynamicComponent;
  let fixture: ComponentFixture<CarouselDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
