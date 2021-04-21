import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUserSecedeComponent } from './ad-user-secede.component';

describe('AdUserSecedeComponent', () => {
  let component: AdUserSecedeComponent;
  let fixture: ComponentFixture<AdUserSecedeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUserSecedeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUserSecedeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
