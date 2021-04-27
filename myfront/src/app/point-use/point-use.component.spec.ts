import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointUseComponent } from './point-use.component';

describe('PointUseComponent', () => {
  let component: PointUseComponent;
  let fixture: ComponentFixture<PointUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
