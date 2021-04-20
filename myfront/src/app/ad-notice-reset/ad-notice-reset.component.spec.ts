import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNoticeResetComponent } from './ad-notice-reset.component';

describe('AdNoticeResetComponent', () => {
  let component: AdNoticeResetComponent;
  let fixture: ComponentFixture<AdNoticeResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdNoticeResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNoticeResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
