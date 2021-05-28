import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesSideMenuComponent } from './universities-side-menu.component';

describe('UniversitySideMenuComponent', () => {
  let component: UniversitiesSideMenuComponent;
  let fixture: ComponentFixture<UniversitiesSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitiesSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
