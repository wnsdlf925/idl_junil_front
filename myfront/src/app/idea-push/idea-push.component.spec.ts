import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPushComponent } from './idea-push.component';

describe('IdeaPushComponent', () => {
  let component: IdeaPushComponent;
  let fixture: ComponentFixture<IdeaPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaPushComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
