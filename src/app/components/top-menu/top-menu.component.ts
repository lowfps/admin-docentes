import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  public title: string;

  constructor() {
    this.title = 'Admin. docentes';
  }

  ngOnInit(): void {
  }

}