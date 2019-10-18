import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLoanComponent } from './on-loan.component';

describe('OnLoanComponent', () => {
  let component: OnLoanComponent;
  let fixture: ComponentFixture<OnLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
