import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCsLogComponent } from './ad-cs-log.component';

describe('AdCsLogComponent', () => {
  let component: AdCsLogComponent;
  let fixture: ComponentFixture<AdCsLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCsLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
