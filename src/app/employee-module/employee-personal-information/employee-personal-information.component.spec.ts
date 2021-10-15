import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePersonalInformationComponent } from './employee-personal-information.component';

describe('EmployeePersonalInformationComponent', () => {
  let component: EmployeePersonalInformationComponent;
  let fixture: ComponentFixture<EmployeePersonalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePersonalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
