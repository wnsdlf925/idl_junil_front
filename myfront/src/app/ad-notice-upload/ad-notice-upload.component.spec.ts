import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNoticeUploadComponent } from './ad-notice-upload.component';

describe('AdNoticeUploadComponent', () => {
  let component: AdNoticeUploadComponent;
  let fixture: ComponentFixture<AdNoticeUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdNoticeUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNoticeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
