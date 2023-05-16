import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-test-request',
  templateUrl: './test-request.component.html',
  styleUrls: ['./test-request.component.css'],
  animations: [
    trigger('slideDownAnimation', [
      state('void', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0'
      })),
      transition('void => *', [
        animate('0.25s', style({
          height: '*',
          opacity: '1'
        }))
      ])
    ])
  ]

})
export class TestRequestComponent {
  refreshPage() {
    window.location.reload();
  }
}
