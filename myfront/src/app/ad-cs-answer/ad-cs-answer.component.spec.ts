import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCsAnswerComponent } from './ad-cs-answer.component';

describe('AdCsAnswerComponent', () => {
  let component: AdCsAnswerComponent;
  let fixture: ComponentFixture<AdCsAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCsAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCsAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
