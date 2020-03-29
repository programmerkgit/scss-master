import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportScssComponent } from './import-scss.component';

describe('ImportScssComponent', () => {
  let component: ImportScssComponent;
  let fixture: ComponentFixture<ImportScssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportScssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
