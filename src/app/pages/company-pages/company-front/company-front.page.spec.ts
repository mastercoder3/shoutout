import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFrontPage } from './company-front.page';

describe('CompanyFrontPage', () => {
  let component: CompanyFrontPage;
  let fixture: ComponentFixture<CompanyFrontPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFrontPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFrontPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
