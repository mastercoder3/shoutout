import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfluenceurPage } from './company-influenceur.page';

describe('CompanyInfluenceurPage', () => {
  let component: CompanyInfluenceurPage;
  let fixture: ComponentFixture<CompanyInfluenceurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyInfluenceurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfluenceurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
