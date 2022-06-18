import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePage4Component } from './sample-page4.component';

describe('SamplePage4Component', () => {
  let component: SamplePage4Component;
  let fixture: ComponentFixture<SamplePage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePage4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
