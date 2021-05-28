import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR_UNIVERSITY } from 'src/app/mocks/professor-university-mock';
import { Professor } from 'src/app/models/professor';
import { ProfessorUniversity } from 'src/app/models/professor-university';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-professors-detail',
  templateUrl: './professors-detail.component.html',
  styleUrls: ['./professors-detail.component.css']
})
export class ProfessorsDetailComponent implements OnInit {

  public arrayProfessorsUniversities: Array<ProfessorUniversity>;
  public amountUniversities: number;
  public selectedProfessorUniversity: ProfessorUniversity;
  public tmp: any;

  //? Modal's attributes
  public trick: any;
  public modalRef: BsModalRef;
  public modalTitle: string;
  public modalText: string;
  public modalProfessor: string;
  public modalUniversity: string;

  constructor(private route: ActivatedRoute, public modalService: BsModalService, private toastr: ToastrService) {
    this.arrayProfessorsUniversities = [];
    this.amountUniversities = 0;
    this.selectedProfessorUniversity = new ProfessorUniversity(new Professor(0, '', '', '', ''), new University(0, '', '', ''));
    this.modalRef = this.trick;
    this.modalTitle = '';
    this.modalText = '';
    this.modalProfessor = '';
    this.modalUniversity = '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((parameter: ParamMap) => {
      this.tmp = parameter.get('codProfessor');
      const professorCod = parseFloat(this.tmp);
      if (Number.isNaN(professorCod) || professorCod == 0) {
        this.arrayProfessorsUniversities = ARRAY_PROFESSOR_UNIVERSITY;
        this.tmp = 0;
      } else {
        this.arrayProfessorsUniversities = ARRAY_PROFESSOR_UNIVERSITY.filter(
          (professorUniversity) => professorUniversity.codProfessor.cod === professorCod
        );
      }
      this.amountUniversities = this.arrayProfessorsUniversities.length;
      this.selectedProfessorUniversity = new ProfessorUniversity(new Professor(0, '', '', '', ''), new University(0, '', '', ''));
    });
  }

  public selectProfessorUniversity(obj: ProfessorUniversity): void {
    this.selectedProfessorUniversity = obj;
  }

  public openModal(template: TemplateRef<any>, tmp: ProfessorUniversity): void {
    this.selectedProfessorUniversity = tmp;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.modalTitle = 'Alert';
    this.modalText = 'Remove this association from the list?';
    this.modalProfessor = this.selectedProfessorUniversity.codProfessor.nameProfessor;
    this.modalUniversity = this.selectedProfessorUniversity.codUniversity.nameUniversity;
  }

  public deleteProfessorUniversity(obj: ProfessorUniversity): void {
    this.arrayProfessorsUniversities = this.arrayProfessorsUniversities.filter(element => element != obj);
    ARRAY_PROFESSOR_UNIVERSITY.splice(0, ARRAY_PROFESSOR_UNIVERSITY.length, ...ARRAY_PROFESSOR_UNIVERSITY.filter(element => element !== obj));
    this.selectedProfessorUniversity = new ProfessorUniversity(new Professor(0,'','','',''), new University(0,'','',''));
  }

  public delete(): void {
    this.deleteProfessorUniversity(this.selectedProfessorUniversity);
    this.modalRef.hide();
    this.ToastrModal('Association was <b>successfully removed</b>', 'Alert', 2);
  }

  public cancelDelete(): void {
    this.modalRef.hide();
  }


  public ToastrModal(message: string, title: string, opcion: number): void {
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
