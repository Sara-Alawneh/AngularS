import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UfmComponent } from './ufm.component';

describe('UfmComponent', () => {
  let component: UfmComponent;
  let fixture: ComponentFixture<UfmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UfmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UfmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
