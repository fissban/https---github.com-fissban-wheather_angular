import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerHourComponent } from './per-hour.component';

describe('PerHourComponent', () => {
  let component: PerHourComponent;
  let fixture: ComponentFixture<PerHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
