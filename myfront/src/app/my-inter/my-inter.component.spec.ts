import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInterComponent } from './my-inter.component';

describe('MyInterComponent', () => {
  let component: MyInterComponent;
  let fixture: ComponentFixture<MyInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
