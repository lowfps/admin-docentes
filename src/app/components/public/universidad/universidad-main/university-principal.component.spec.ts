import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPrincipalComponent } from './university-principal.component';

describe('UniversityPrincipalComponent', () => {
  let component: UniversityPrincipalComponent;
  let fixture: ComponentFixture<UniversityPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
