import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-released-patients',
  templateUrl: './released-patients.component.html',
  styleUrls: ['./released-patients.component.css'],
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
export class ReleasedPatientsComponent {
  public isAdding: boolean = false;
  refreshPage() {
    window.location.reload();
  }
}
