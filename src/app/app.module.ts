import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AccessComponent } from './components/access/access.component';
import { ArrayPipe } from './pipes/array.pipe';
import { PrincipalComponent } from './components/private/principal/principal.component';

import { ProfessorAdminComponent } from './components/public/docente/docente-admin/professor-admin.component';
import { ProfessorCreateComponent } from './components/public/docente/crear-docente/professor-create.component';
import { ProfessorEditComponent } from './components/public/docente/editar-docente/professor-edit.component';
import { ProfessorViewComponent } from './components/public/docente/listar-docente/professor-view.component';
import { ProfessorPrincipalComponent } from './components/public/docente/docente-main/professor-principal.component';

import { UniversityAdminComponent } from './components/public/universidad/universidad-admin/university-admin.component';
import { UniversityCreateComponent } from './components/public/universidad/crear-universidad/university-create.component';
import { UniversityEditComponent } from './components/public/universidad/editar-universidad/university-edit.component';
import { UniversityPrincipalComponent } from './components/public/universidad/universidad-main/university-principal.component';
import { UniversityViewComponent } from './components/public/universidad/listar-universidades/university-view.component';

import { ProfessorsPrincipalComponent } from './components/private/docente/docente-main/professors-principal.component';
import { ProfessorsDetailComponent } from './components/private/docente/docente-detalle/professors-detail.component';
import { ProfessorsSideMenuComponent } from './components/private/docente/docente-side-menu/professors-side-menu.component';

import { UniversitiesSideMenuComponent } from './components/private/universities/universities-side-menu/universities-side-menu.component';
import { UniversitiesDetailComponent } from './components/private/universities/universities-detail/universities-detail.component';
import { UniversitiesPrincipalComponent } from './components/private/universities/universities-principal/universities-principal.component';
import { ValidationComponent } from './components/access/validation/validation.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MzDashboardComponent } from './components/mz-dashboard/mz-dashboard.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    NotFoundComponent,
    HomeComponent,
    ProfessorCreateComponent,
    ProfessorEditComponent,
    ProfessorViewComponent,
    ProfessorPrincipalComponent,
    ProfessorAdminComponent,
    PrincipalComponent,
    ArrayPipe,
    ProfessorsPrincipalComponent,
    ProfessorsDetailComponent,
    ProfessorsSideMenuComponent,
    UniversitiesSideMenuComponent,
    UniversitiesDetailComponent,
    UniversitiesPrincipalComponent,
    AccessComponent,
    UniversityAdminComponent,
    UniversityCreateComponent,
    UniversityEditComponent,
    UniversityPrincipalComponent,
    UniversityViewComponent,
    ValidationComponent,
    SignUpComponent,
    MzDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
