import { Component, OnInit } from '@angular/core';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { University } from 'src/app/models/university';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-universities-side-menu',
  templateUrl: './universities-side-menu.component.html',
  styleUrls: ['./universities-side-menu.component.css'],
  providers: [ArrayPipe]
})
export class UniversitiesSideMenuComponent implements OnInit {

  public arrayUniversities: Array<University>;
  public objSelectedUniversity: University;

  constructor(private order: ArrayPipe) {
    this.arrayUniversities = [];
    this.objSelectedUniversity = new University(0, '', '', '');
  }

  ngOnInit(): void {
    const parametersU = ['nameUniversity', 'ASC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parametersU);
  }

  public selectUniversity(obj: University): void {
    this.objSelectedUniversity = obj;
  }

  public initializeUniversity(): void {
    const parameters = ['nameUniversity', 'ASC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parameters);
    this.objSelectedUniversity = new University(0, '', '', '');
  }
}
