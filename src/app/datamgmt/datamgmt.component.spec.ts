import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamgmtComponent } from './datamgmt.component';

describe('DatamgmtComponent', () => {
  let component: DatamgmtComponent;
  let fixture: ComponentFixture<DatamgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
