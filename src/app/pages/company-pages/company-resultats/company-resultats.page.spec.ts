import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyResultatsPage } from './company-resultats.page';

describe('CompanyResultatsPage', () => {
  let component: CompanyResultatsPage;
  let fixture: ComponentFixture<CompanyResultatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyResultatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyResultatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
