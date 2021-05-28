import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { ARRAY_PROFESSOR_UNIVERSITY } from 'src/app/mocks/professor-university-mock';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { Professor } from 'src/app/models/professor';
import { ProfessorUniversity } from 'src/app/models/professor-university';
import { University } from 'src/app/models/university';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-university-create',
  templateUrl: './university-create.component.html',
  styleUrls: ['./university-create.component.css'],
  providers: [ArrayPipe]
})
export class UniversityCreateComponent implements OnInit {

  public tempBase64: any;
  public objUniversity: University;
  public arrayProfessors: Array<Professor>;
  public objProfessor: Professor;
  public objUniversityProfessor: ProfessorUniversity;
  public tempArray: any;

  constructor(private order:ArrayPipe, public modalService:BsModalService, private toastr:ToastrService, private router:Router) {
    this.objUniversity = new University(0,'','','');
    this.arrayProfessors = [];
    this.objProfessor = new Professor(0,'','','','');
    this.objUniversityProfessor = new ProfessorUniversity(this.objProfessor, this.objUniversity);
    this.tempArray = [];
  }

  ngOnInit(): void {
    const parameters = ['nameProfessor', 'ASC'];
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
  }

  public selectedPhoto(input: any): any {
    if (!input.target.files[0] || input.target.files[0].length === 0) return;
    const mimeType = input.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.ToastrModal('Only <b>images</b> are followed', 'Warning', 3);
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = () => {
      this.tempBase64 = reader.result;
      this.objUniversity.logoBase64 = this.tempBase64;
      this.objUniversity.logo = input.target.files[0].name;
    };
  }

  public selectProfessor(obj: Professor): void{
    if (!this.tempArray.includes(obj)){
      this.tempArray.push(this.objProfessor = obj);
    }
  }

  public sendInfo(form: NgForm): boolean {
    this.createUniversity();
    this.objUniversity = new University(0,'','','');
    this.ToastrModal('The university has been <b>created</b> sucessfully', 'Success', 1);
    this.router.navigate(['/university/view']);
    return true;
  }

  public createUniversity(): void{
    this.objUniversity.cod = ARRAY_UNIVERSITY.length+1;
    ARRAY_UNIVERSITY.push(this.objUniversity);
    this.router.navigate(['/university/view']);
    for (let index = 0; index < this.tempArray.length; index++) {
      const element = this.tempArray[index];
      this.objUniversityProfessor = new ProfessorUniversity(element, this.objUniversity);
      ARRAY_PROFESSOR_UNIVERSITY.push(this.objUniversityProfessor);
    }
  }

  public ToastrModal(message: string, title: string, opcion: number) {
    const parameters = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeout: 8000
    };
    switch (opcion) {
      case 1:
        this.toastr.success(message, title, parameters);
        break;
      case 2:
        this.toastr.info(message, title, parameters);
        break;
      case 3:
        this.toastr.warning(message, title, parameters);
        break;
      case 4:
        this.toastr.error(message, title, parameters);
        break;
      default:
        break;
    }
  }
}
