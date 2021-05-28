import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesPrincipalComponent } from './universities-principal.component';

describe('UniversityPrincipalComponent', () => {
  let component: UniversitiesPrincipalComponent;
  let fixture: ComponentFixture<UniversitiesPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitiesPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
