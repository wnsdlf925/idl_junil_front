import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdContactAnswerComponent } from './ad-contact-answer.component';

describe('AdContactAnswerComponent', () => {
  let component: AdContactAnswerComponent;
  let fixture: ComponentFixture<AdContactAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdContactAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdContactAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
