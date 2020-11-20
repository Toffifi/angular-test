/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InsidePostComponent } from './inside-post.component';

describe('InsidePostComponent', () => {
  let component: InsidePostComponent;
  let fixture: ComponentFixture<InsidePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsidePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsidePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
