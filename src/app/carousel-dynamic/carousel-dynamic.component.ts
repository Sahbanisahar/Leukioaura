import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-dynamic',
  templateUrl: './carousel-dynamic.component.html',
  styleUrls: ['./carousel-dynamic.component.css']
})
export class CarouselDynamicComponent {
  public constructor(public router: Router) { }
}
