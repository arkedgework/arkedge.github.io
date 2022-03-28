import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectengineeringComponent } from './projectengineering.component';

describe('ProjectengineeringComponent', () => {
  let component: ProjectengineeringComponent;
  let fixture: ComponentFixture<ProjectengineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectengineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
