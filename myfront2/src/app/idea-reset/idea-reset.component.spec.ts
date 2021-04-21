import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaResetComponent } from './idea-reset.component';

describe('IdeaResetComponent', () => {
  let component: IdeaResetComponent;
  let fixture: ComponentFixture<IdeaResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
