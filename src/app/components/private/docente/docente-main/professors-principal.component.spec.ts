import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsPrincipalComponent } from './professors-principal.component';

describe('ProfessorPrincipalComponent', () => {
  let component: ProfessorsPrincipalComponent;
  let fixture: ComponentFixture<ProfessorsPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorsPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
