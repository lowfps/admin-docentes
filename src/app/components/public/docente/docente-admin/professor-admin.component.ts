import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_PROFESSOR } from 'src/app/mocks/professor-mock';
import { Professor } from 'src/app/models/professor';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-Professor-admin',
  templateUrl: './professor-admin.component.html',
  styleUrls: ['./professor-admin.component.css'],
  providers: [ArrayPipe]
})
export class ProfessorAdminComponent implements OnInit {

  //? Professor's attributes
  public arrayProfessors: Array<Professor>;
  public selectedProfessor: Professor;

  //? Pagination's attributes
  public actualPage: number;
  public amountShowRecords: number;
  public amountTotalRecords: number;
  public amountTotalPages: number;

  //? Modal's attributes
  public trick: any;
  public modalRef: BsModalRef;
  public modalTitle: string;
  public modalText: string;
  public modalName: string;
  public modalDocument: string;

  constructor(private order: ArrayPipe, public modalService: BsModalService, private toastr: ToastrService) {
    const parameters = ['document', 'ASC'];
    //! this.arrayProfessors = ARRAY_PROFESSOR;
    this.arrayProfessors = this.order.transform(ARRAY_PROFESSOR, parameters);
    this.selectedProfessor = new Professor(0,'','','','');
    this.actualPage = 1;
    this.amountShowRecords = 10;
    this.amountTotalRecords = this.arrayProfessors.length;
    this.amountTotalPages = Math.ceil(this.amountTotalRecords / this.amountShowRecords);
    this.modalRef = this.trick;
    this.modalTitle = '';
    this.modalText = '';
    this.modalName = '';
    this.modalDocument = '';
  }

  ngOnInit(): void {
  }

  public openModal(template: TemplateRef<any>, professorTMP: Professor): void {
    this.selectedProfessor = professorTMP;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.modalTitle = 'Alert';
    this.modalText = 'Remove this professor from the list?';
    this.modalName = this.selectedProfessor.nameProfessor;
    this.modalDocument = this.selectedProfessor.document;
  }

  public deleteProfessor(objProfessor: Professor): void {
    this.arrayProfessors = this.arrayProfessors.filter(element => element != objProfessor);
    ARRAY_PROFESSOR.splice(0, ARRAY_PROFESSOR.length, ...ARRAY_PROFESSOR.filter(element => element !== objProfessor));
    this.selectedProfessor = new Professor(0, '', '', '', '');
  }

  public delete(): void {
    this.deleteProfessor(this.selectedProfessor);
    this.modalRef.hide();
    this.ToastrModal('Professor was <b>successfully removed</b>', 'Alert', 2);
    this.amountTotalRecords = this.arrayProfessors.length;
    this.amountTotalPages = Math.ceil(this.amountTotalRecords / this.amountShowRecords);
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
