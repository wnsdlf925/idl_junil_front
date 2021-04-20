import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTotalUserLogComponent } from './ad-total-user-log.component';

describe('AdTotalUserLogComponent', () => {
  let component: AdTotalUserLogComponent;
  let fixture: ComponentFixture<AdTotalUserLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTotalUserLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTotalUserLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
