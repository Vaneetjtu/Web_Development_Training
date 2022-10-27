import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculator } from './cal.component';

describe('CalculatorComponent', () => {
  let component: Calculator;
  let fixture: ComponentFixture<Calculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculator ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calculator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
