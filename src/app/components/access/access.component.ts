import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {

  public objUser: User;

  constructor(public modalService:BsModalService, private toastr:ToastrService, private router:Router) {
    this.objUser = new User(0,'','','','','');
  }

  ngOnInit(): void {
  }

  public sendInfo(form: NgForm): boolean {
    this.ToastrModal('<b>Sign In</b> sucessfully', 'Success', 1);
    return true;
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
