import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RoleAccessService } from '../role-access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public user: RoleAccessService) {}
}
