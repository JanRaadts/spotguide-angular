import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotInfoDesktopComponent } from './spot-info-desktop.component';

describe('SpotInfoDesktopComponent', () => {
  let component: SpotInfoDesktopComponent;
  let fixture: ComponentFixture<SpotInfoDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotInfoDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotInfoDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
