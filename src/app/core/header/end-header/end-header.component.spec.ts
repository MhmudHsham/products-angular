import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndHeaderComponent } from './end-header.component';

describe('EndHeaderComponent', () => {
  let component: EndHeaderComponent;
  let fixture: ComponentFixture<EndHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
