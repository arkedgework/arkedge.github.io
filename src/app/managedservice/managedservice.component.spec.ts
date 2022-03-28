import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedserviceComponent } from './managedservice.component';

describe('ManagedserviceComponent', () => {
  let component: ManagedserviceComponent;
  let fixture: ComponentFixture<ManagedserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
