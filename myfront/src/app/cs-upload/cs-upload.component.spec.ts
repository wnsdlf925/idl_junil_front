import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsUploadComponent } from './cs-upload.component';

describe('CsUploadComponent', () => {
  let component: CsUploadComponent;
  let fixture: ComponentFixture<CsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
