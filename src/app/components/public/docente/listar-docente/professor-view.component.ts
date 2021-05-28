import { Component, OnInit } from '@angular/core';
import { Professor } from 'src/app/models/professor';
import { ArrayPipe } from 'src/app/pipes/array.pipe';
import { ARRAY_PROFESSOR } from '../../../../mocks/professor-mock';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './professor-view.component.html',
  styleUrls: ['./professor-view.component.css'],
  providers: [ArrayPipe]
})
export class ProfessorViewComponent implements OnInit {

  public arrayProfessors: Array<Professor>;
  public actualPage: number;
  public amountShowRecords: number;
  public amountTotalRecords: number;
  public amountTotalPages: number;

  constructor(private order: ArrayPipe) {
    const parameters = ['cod', 'DESC'];
    //* this.arrayProfessors = ARRAY_PROFESSOR;
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
    this.actualPage = 1;
    this.amountShowRecords = 10;
    this.amountTotalRecords = this.arrayProfessors.length;
    this.amountTotalPages = Math.ceil(this.amountTotalRecords / this.amountShowRecords);
  }

  ngOnInit(): void {
  }

}
