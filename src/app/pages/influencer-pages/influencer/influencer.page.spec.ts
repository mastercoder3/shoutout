import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerPage } from './influencer.page';

describe('InfluencerPage', () => {
  let component: InfluencerPage;
  let fixture: ComponentFixture<InfluencerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
