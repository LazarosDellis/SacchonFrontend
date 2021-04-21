import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDoctorDataComponent } from './check-doctor-data.component';

describe('CheckDoctorDataComponent', () => {
  let component: CheckDoctorDataComponent;
  let fixture: ComponentFixture<CheckDoctorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDoctorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDoctorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
