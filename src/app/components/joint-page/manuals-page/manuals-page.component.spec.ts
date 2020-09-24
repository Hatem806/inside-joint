import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualsPageComponent } from './manuals-page.component';

describe('ManualsPageComponent', () => {
  let component: ManualsPageComponent;
  let fixture: ComponentFixture<ManualsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
