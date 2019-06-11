import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsPage } from './resultats.page';

describe('ResultatsPage', () => {
  let component: ResultatsPage;
  let fixture: ComponentFixture<ResultatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
