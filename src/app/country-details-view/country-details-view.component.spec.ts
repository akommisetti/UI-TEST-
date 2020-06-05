import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsViewComponent } from './country-details-view.component';

describe('CountryDetailsViewComponent', () => {
  let component: CountryDetailsViewComponent;
  let fixture: ComponentFixture<CountryDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
