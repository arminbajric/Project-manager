import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMettingComponent } from './new-metting.component';

describe('NewMettingComponent', () => {
  let component: NewMettingComponent;
  let fixture: ComponentFixture<NewMettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
