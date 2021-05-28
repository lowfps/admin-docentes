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
  selector: 'app-teacher-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css'],
  providers: [ArrayPipe]
})
export class ProfessorCreateComponent implements OnInit {

  public tempBase64: any;
  public objProfessor: Professor;
  public arrayUniversities: Array<University>;
  public objUniversity: University;
  public objProfessorUniversity: ProfessorUniversity;
  public tempArray: any;

  constructor(private order:ArrayPipe, public modalService:BsModalService, private toastr:ToastrService, private router:Router) {
    this.objProfessor = new Professor(0,'','', '', '');
    this.arrayUniversities = [];
    this.objUniversity = new University(0,'','','');
    this.objProfessorUniversity = new ProfessorUniversity(this.objProfessor, this.objUniversity);
    this.tempArray = [];
  }

  ngOnInit(): void {
    const parameters = ['nameUniversity', 'ASC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parameters);
  }

  public selectPhoto(input: any): any{
    if(!input.target.files[0] || input.target.files[0].length === 0) {
      return;
    }
    const mimeType = input.target.files[0].type;
    if(mimeType.match(/image\/*/) == null){
      this.ToastrModal('Only <b>Images</b> are followed', 'Warning', 3);
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload  = () => {
      this.tempBase64 = reader.result;
      this.objProfessor.photoBase64 = this.tempBase64;
      this.objProfessor.photo = input.target.files[0].name;
    };
  }

  public selectUniversity(obj: University): void{
    if (!this.tempArray.includes(obj)){
      this.tempArray.push(this.objUniversity = obj);
    }
  }

  public sendInfo(form:NgForm): boolean{
    this.createProfessor();
    this.objProfessor = new Professor(0,'','','','');
    this.ToastrModal('The professor has been <b>created</b> successfully', 'Success', 1);
    this.router.navigate(['/professor/view']);
    return true;
  }

  public createProfessor(): void{
    this.objProfessor.cod = ARRAY_PROFESSOR.length+1;
    ARRAY_PROFESSOR.push(this.objProfessor);
    this.router.navigate(['/professor/view']);
    console.log(ARRAY_PROFESSOR_UNIVERSITY);
    for (let index = 0; index < this.tempArray.length; index++) {
      const element = this.tempArray[index];
      this.objProfessorUniversity = new ProfessorUniversity(this.objProfessor, element);
      ARRAY_PROFESSOR_UNIVERSITY.push(this.objProfessorUniversity);
    }
  }

  public ToastrModal(message:string, title:string, opcion:number):void{
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
