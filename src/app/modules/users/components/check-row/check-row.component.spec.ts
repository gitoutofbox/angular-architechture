import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRowComponent } from './check-row.component';

describe('CheckRowComponent', () => {
  let component: CheckRowComponent;
  let fixture: ComponentFixture<CheckRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
