import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomButtonComponent } from './random-button.component';

describe('RandomButtonComponent', () => {
  let component: RandomButtonComponent;
  let fixture: ComponentFixture<RandomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
