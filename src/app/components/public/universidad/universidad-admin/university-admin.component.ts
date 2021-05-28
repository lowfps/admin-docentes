import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { University } from 'src/app/models/university';
import { ArrayPipe } from 'src/app/pipes/array.pipe';

@Component({
  selector: 'app-university-admin',
  templateUrl: './university-admin.component.html',
  styleUrls: ['./university-admin.component.css'],
  providers: [ArrayPipe]
})
export class UniversityAdminComponent implements OnInit {

  //? University's attributes
  public arrayUniversities: Array<University>;
  public selectedUniversity: University;

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
  public modalLogo: string;

  constructor(private order: ArrayPipe, public modalService: BsModalService, private toastr: ToastrService) {
    const parameters = ['nameUniversity', 'ASC'];
    this.arrayUniversities = this.order.transform(ARRAY_UNIVERSITY, parameters);
    this.selectedUniversity = new University(0,'','','');
    this.actualPage = 1;
    this.amountShowRecords = 10;
    this.amountTotalRecords = this.arrayUniversities.length;
    this.amountTotalPages = Math.ceil(this.amountTotalRecords / this.amountShowRecords);
    this.modalRef = this.trick;
    this.modalTitle = '';
    this.modalText = '';
    this.modalName = '';
    this.modalLogo = '';
  }

  ngOnInit(): void {
  }

  public openModal(template: TemplateRef<any>, universityTMP: University): void {
    this.selectedUniversity = universityTMP;
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
    this.modalTitle = 'Alert';
    this.modalText = 'Remove this University from the list?';
    this.modalName = this.selectedUniversity.nameUniversity;
    this.modalLogo = this.selectedUniversity.logo;
  }

  public deleteUniversity(objUniversity: University): void {
    this.arrayUniversities = this.arrayUniversities.filter(element => element != objUniversity);
    ARRAY_UNIVERSITY.splice(0, ARRAY_UNIVERSITY.length, ...ARRAY_UNIVERSITY.filter(element => element !== objUniversity));
    this.selectedUniversity = new University(0, '', '', '');
  }

  public delete(): void {
    this.deleteUniversity(this.selectedUniversity);
    this.modalRef.hide();
    this.ToastrModal('University was <b>successfully removed</b>', 'Alert', 2);
    this.amountTotalRecords = this.arrayUniversities.length;
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
