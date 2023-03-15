import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotInfoMobileComponent } from './spot-info-mobile.component';

describe('SpotInfoMobileComponent', () => {
  let component: SpotInfoMobileComponent;
  let fixture: ComponentFixture<SpotInfoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotInfoMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotInfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
