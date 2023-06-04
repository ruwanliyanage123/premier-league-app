import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstbatComponent } from './firstbat.component';

describe('FirstbatComponent', () => {
  let component: FirstbatComponent;
  let fixture: ComponentFixture<FirstbatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstbatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
