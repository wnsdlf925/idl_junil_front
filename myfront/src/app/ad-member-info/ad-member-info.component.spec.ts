import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMemberInfoComponent } from './ad-member-info.component';

describe('AdMemberInfoComponent', () => {
  let component: AdMemberInfoComponent;
  let fixture: ComponentFixture<AdMemberInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdMemberInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMemberInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
