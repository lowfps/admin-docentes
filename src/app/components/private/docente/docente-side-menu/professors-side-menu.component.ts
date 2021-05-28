import { Component, OnInit } from '@angular/core';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { Professor } from 'src/app/models/professor';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-professors-side-menu',
  templateUrl: './professors-side-menu.component.html',
  styleUrls: ['./professors-side-menu.component.css'],
  providers: [ArrayPipe]
})
export class ProfessorsSideMenuComponent implements OnInit {

  public arrayProfessors: Array<Professor>;
  public objSelectedProfessor: Professor;

  constructor(private order: ArrayPipe) {
    this.arrayProfessors = [];
    this.objSelectedProfessor = new Professor(0, '', '', '', '');
  }

  ngOnInit(): void {
    const parametersP = ['nameProfessor', 'ASC'];
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parametersP);
  }

  public selectProfessor(obj: Professor): void {
    this.objSelectedProfessor = obj;
  }

  public initializeProfessor(): void {
    const parameters = ['nameProfessor', 'ASC'];
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
    this.objSelectedProfessor = new Professor(0, '', '', '', '');
  }
}
