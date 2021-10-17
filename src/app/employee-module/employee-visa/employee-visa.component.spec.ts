import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeVisaComponent } from './employee-visa.component';

describe('EmployeeVisaComponent', () => {
  let component: EmployeeVisaComponent;
  let fixture: ComponentFixture<EmployeeVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeVisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
