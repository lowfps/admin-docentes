import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mz-dashboard',
  templateUrl: './mz-dashboard.component.html',
  styleUrls: ['./mz-dashboard.component.css']
})
export class MzDashboardComponent implements OnInit {

  public objUserSession: Users;

  constructor(public authService:AuthService) {
    this.objUserSession = authService.getUser();
  }

  ngOnInit(): void {
  }

}
