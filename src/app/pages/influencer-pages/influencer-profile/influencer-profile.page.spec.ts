import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerProfilePage } from './influencer-profile.page';

describe('InfluencerProfilePage', () => {
  let component: InfluencerProfilePage;
  let fixture: ComponentFixture<InfluencerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
