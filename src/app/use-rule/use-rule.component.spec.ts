import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseRuleComponent } from './use-rule.component';

describe('UseRuleComponent', () => {
  let component: UseRuleComponent;
  let fixture: ComponentFixture<UseRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
