import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MzDashboardComponent } from './mz-dashboard.component';

describe('MzDashboardComponent', () => {
  let component: MzDashboardComponent;
  let fixture: ComponentFixture<MzDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MzDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MzDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
