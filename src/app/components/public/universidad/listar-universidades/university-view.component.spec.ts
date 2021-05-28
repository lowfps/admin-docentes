import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityViewComponent } from './university-view.component';

describe('UniversityViewComponent', () => {
  let component: UniversityViewComponent;
  let fixture: ComponentFixture<UniversityViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
