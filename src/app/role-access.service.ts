import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessService {
  public roles: string[] = ["doctor", "patient", "lab", "nurse"]
  public role: string = this.roles[0];
  constructor() { }
}
