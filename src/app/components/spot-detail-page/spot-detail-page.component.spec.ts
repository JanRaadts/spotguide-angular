import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotDetailPageComponent } from './spot-detail-page.component';

describe('SpotDetailPageComponent', () => {
  let component: SpotDetailPageComponent;
  let fixture: ComponentFixture<SpotDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
