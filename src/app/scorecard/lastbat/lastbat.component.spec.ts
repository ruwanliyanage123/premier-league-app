import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastbatComponent } from './lastbat.component';

describe('LastbatComponent', () => {
  let component: LastbatComponent;
  let fixture: ComponentFixture<LastbatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastbatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
