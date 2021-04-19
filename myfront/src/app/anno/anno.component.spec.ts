import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoComponent } from './anno.component';

describe('AnnoComponent', () => {
  let component: AnnoComponent;
  let fixture: ComponentFixture<AnnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
