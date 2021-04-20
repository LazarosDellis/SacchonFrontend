import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPatientDataComponent } from './check-patient-data.component';

describe('CheckPatientDataComponent', () => {
  let component: CheckPatientDataComponent;
  let fixture: ComponentFixture<CheckPatientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPatientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPatientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
