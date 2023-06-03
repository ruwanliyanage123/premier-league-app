import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillteamComponent } from './fillteam.component';

describe('FillteamComponent', () => {
  let component: FillteamComponent;
  let fixture: ComponentFixture<FillteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillteamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
