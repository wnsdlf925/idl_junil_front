import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdContactLogComponent } from './ad-contact-log.component';

describe('AdContactLogComponent', () => {
  let component: AdContactLogComponent;
  let fixture: ComponentFixture<AdContactLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdContactLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdContactLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
