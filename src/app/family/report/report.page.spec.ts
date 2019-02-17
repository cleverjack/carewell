import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyReportPage } from './report.page';

describe('FamilyReportPage', () => {
  let component: FamilyReportPage;
  let fixture: ComponentFixture<FamilyReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
