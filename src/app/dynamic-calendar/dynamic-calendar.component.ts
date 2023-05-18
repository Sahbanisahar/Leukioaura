import { Component } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-dynamic-calendar',
  template: `
<div class="calendar-container rounded-lg shadow-2xl">
  <div class="calendar-header">
    <button mat-icon-button (click)="changeView('month')">
      <mat-icon>view_module</mat-icon>
    </button>
    <button mat-icon-button (click)="changeView('week')">
      <mat-icon>view_week</mat-icon>
    </button>
  </div>

    <mwl-calendar-month-view
      *ngIf="view === 'month'"
      [viewDate]="viewDate"
      [events]="events"
      [activeDayIsOpen]="true"
      (eventClicked)="handleEventClick($event.event)"
    ></mwl-calendar-month-view>
    <mwl-calendar-week-view
      *ngIf="view === 'week'"
      [viewDate]="viewDate"
      [events]="events"
      (eventClicked)="handleEventClick($event.event)"
    ></mwl-calendar-week-view>
    <mwl-calendar-day-view
      *ngIf="view === 'day'"
      [viewDate]="viewDate"
      [events]="events"
      (eventClicked)="handleEventClick($event.event)"
    ></mwl-calendar-day-view>
  </div>
`,
  styleUrls: ['./dynamic-calendar.component.css']
})
export class DynamicCalendarComponent {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [
    {
      title: 'Event 1',
      start: new Date(),
      end: new Date(),
    },
    // Add more events here...
  ];

  changeView(view: string): void {
    this.view = view as CalendarView;
  }

  handleEventClick(event: CalendarEvent): void {
    console.log('Event clicked:', event);
    // Handle event click logic here
  }
}
