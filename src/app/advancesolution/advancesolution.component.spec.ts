import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancesolutionComponent } from './advancesolution.component';

describe('AdvancesolutionComponent', () => {
  let component: AdvancesolutionComponent;
  let fixture: ComponentFixture<AdvancesolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancesolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancesolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
