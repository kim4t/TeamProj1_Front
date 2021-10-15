import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHouseComponent } from './employee-house.component';

describe('EmployeeHouseComponent', () => {
  let component: EmployeeHouseComponent;
  let fixture: ComponentFixture<EmployeeHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
