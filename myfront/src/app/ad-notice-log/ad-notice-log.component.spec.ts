import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNoticeLogComponent } from './ad-notice-log.component';

describe('AdNoticeLogComponent', () => {
  let component: AdNoticeLogComponent;
  let fixture: ComponentFixture<AdNoticeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdNoticeLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNoticeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
