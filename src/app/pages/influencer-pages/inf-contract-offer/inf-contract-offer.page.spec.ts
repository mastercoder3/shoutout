import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfContractOfferPage } from './inf-contract-offer.page';

describe('InfContractOfferPage', () => {
  let component: InfContractOfferPage;
  let fixture: ComponentFixture<InfContractOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfContractOfferPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfContractOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
