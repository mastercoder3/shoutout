import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerConnectPage } from './influencer-connect.page';

describe('InfluencerConnectPage', () => {
  let component: InfluencerConnectPage;
  let fixture: ComponentFixture<InfluencerConnectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencerConnectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerConnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
