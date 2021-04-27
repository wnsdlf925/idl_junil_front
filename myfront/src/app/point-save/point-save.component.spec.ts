import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSaveComponent } from './point-save.component';

describe('PointSaveComponent', () => {
  let component: PointSaveComponent;
  let fixture: ComponentFixture<PointSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
