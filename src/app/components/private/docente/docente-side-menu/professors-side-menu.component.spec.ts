import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsSideMenuComponent } from './professors-side-menu.component';

describe('ProfessorSideMenuComponent', () => {
  let component: ProfessorsSideMenuComponent;
  let fixture: ComponentFixture<ProfessorsSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorsSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
