import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsResetComponent } from './cs-reset.component';

describe('CsResetComponent', () => {
  let component: CsResetComponent;
  let fixture: ComponentFixture<CsResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
