import { Professor } from "./professor";
import { University } from "./university";

export class ProfessorUniversity {
  public codProfessor: Professor;
  public codUniversity: University;

  constructor(codProfessor: Professor, codUniversity: University ){
    this.codProfessor = codProfessor;
    this.codUniversity = codUniversity;
  }
}
