import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsPage } from './abouts-page';

describe('AboutsPage', () => {
  let component: AboutsPage;
  let fixture: ComponentFixture<AboutsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
