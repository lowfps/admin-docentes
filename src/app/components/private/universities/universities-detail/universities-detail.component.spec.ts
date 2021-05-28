import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesDetailComponent } from './universities-detail.component';

describe('UniversityDetailComponent', () => {
  let component: UniversitiesDetailComponent;
  let fixture: ComponentFixture<UniversitiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitiesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
