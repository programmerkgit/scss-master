import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionScssComponent } from './function-scss.component';

describe('FunctionScssComponent', () => {
  let component: FunctionScssComponent;
  let fixture: ComponentFixture<FunctionScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
