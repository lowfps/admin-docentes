import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ARRAY_UNIVERSITY } from 'src/app/mocks/university-mock';
import { University } from 'src/app/models/university';

@Component({
  selector: 'app-university-edit',
  templateUrl: './university-edit.component.html',
  styleUrls: ['./university-edit.component.css']
})
export class UniversityEditComponent implements OnInit {

  public tempBase64: any;
  public objUniversity: University;

  constructor(public modalService: BsModalService, private toastr: ToastrService, private route: ActivatedRoute) {
    this.objUniversity = new University(0,'','','');
  }

  //! Consumir servicios del Backend
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameter: ParamMap) =>{
      let tempObj: any;
      const data = String(parameter.get('codUniversity'));
      const numericalData = parseFloat(data);
      tempObj = ARRAY_UNIVERSITY.find((university) => university.cod === numericalData);
      this.objUniversity = tempObj;
    });
  }

  public selectedPhoto(input: any): any{
    if(!input.target.files[0] || input.target.files[0].length === 0) return;
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

  public sendInfo(form: NgForm): boolean {
    this.ToastrModal('The university has been <b>updated</b> sucessfully', 'Success', 1);
    return true;
  }

  public ToastrModal(message: string, title: string, opcion: number){
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
