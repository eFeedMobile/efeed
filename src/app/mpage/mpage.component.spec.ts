import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpageComponent } from './mpage.component';

describe('MpageComponent', () => {
  let component: MpageComponent;
  let fixture: ComponentFixture<MpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
