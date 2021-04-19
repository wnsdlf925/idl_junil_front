import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAuthComponent } from './join-auth.component';

describe('JoinAuthComponent', () => {
  let component: JoinAuthComponent;
  let fixture: ComponentFixture<JoinAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
