import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfounfdComponent } from './notfounfd.component';

describe('NotfounfdComponent', () => {
  let component: NotfounfdComponent;
  let fixture: ComponentFixture<NotfounfdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfounfdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfounfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
