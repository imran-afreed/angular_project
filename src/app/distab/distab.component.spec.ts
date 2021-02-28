import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistabComponent } from './distab.component';

describe('DistabComponent', () => {
  let component: DistabComponent;
  let fixture: ComponentFixture<DistabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
