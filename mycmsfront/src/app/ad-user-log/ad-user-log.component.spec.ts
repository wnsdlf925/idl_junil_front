import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdUserLogComponent } from './ad-user-log.component';

describe('AdUserLogComponent', () => {
  let component: AdUserLogComponent;
  let fixture: ComponentFixture<AdUserLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdUserLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdUserLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
