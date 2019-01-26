import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingFormComponent } from './ping-form.component';

describe('PingFormComponent', () => {
  let component: PingFormComponent;
  let fixture: ComponentFixture<PingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
