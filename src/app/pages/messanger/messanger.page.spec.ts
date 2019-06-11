import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessangerPage } from './messanger.page';

describe('MessangerPage', () => {
  let component: MessangerPage;
  let fixture: ComponentFixture<MessangerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessangerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessangerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
