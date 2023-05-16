import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-interface',
  templateUrl: './lab-interface.component.html',
  styleUrls: ['./lab-interface.component.css']
})
export class LabInterfaceComponent {
  public currentPageLab: string = '1';
  public isAdding: boolean = false;
}
