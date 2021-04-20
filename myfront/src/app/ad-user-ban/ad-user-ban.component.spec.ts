import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUserBanComponent } from './ad-user-ban.component';

describe('AdUserBanComponent', () => {
  let component: AdUserBanComponent;
  let fixture: ComponentFixture<AdUserBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUserBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUserBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
