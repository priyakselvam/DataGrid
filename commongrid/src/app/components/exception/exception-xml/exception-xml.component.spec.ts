import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionXmlComponent } from './exception-xml.component';

describe('ExceptionXmlComponent', () => {
  let component: ExceptionXmlComponent;
  let fixture: ComponentFixture<ExceptionXmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExceptionXmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
