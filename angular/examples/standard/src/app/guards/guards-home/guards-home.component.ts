import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-guards-home',
  templateUrl: './guards-home.component.html',
  styleUrls: ['./guards-home.component.css']
})
export class GuardsHomeComponent {
  constructor(private adminService: AdminService) { }

  get isAdmin(): boolean {
    return this.adminService.isAdmin;
  }

  set isAdmin(value: boolean) {
    this.adminService.isAdmin = value;
  }

  get enableRedirect(): boolean {
    return this.adminService.enableRedirect;
  }

  set enableRedirect(value: boolean) {
    this.adminService.enableRedirect = value;
  }
}
