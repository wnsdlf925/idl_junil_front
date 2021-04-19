import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenAgreeComponent } from './chosen-agree.component';

describe('ChosenAgreeComponent', () => {
  let component: ChosenAgreeComponent;
  let fixture: ComponentFixture<ChosenAgreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenAgreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenAgreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
