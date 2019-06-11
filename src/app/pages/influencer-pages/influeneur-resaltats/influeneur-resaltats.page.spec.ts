import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflueneurResaltatsPage } from './influeneur-resaltats.page';

describe('InflueneurResaltatsPage', () => {
  let component: InflueneurResaltatsPage;
  let fixture: ComponentFixture<InflueneurResaltatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflueneurResaltatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflueneurResaltatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
