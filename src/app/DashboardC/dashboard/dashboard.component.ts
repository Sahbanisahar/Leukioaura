import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public list: string[] = ['overview', 'doctors', 'patients']
  public currentPageDash: string = this.list[0];
}
