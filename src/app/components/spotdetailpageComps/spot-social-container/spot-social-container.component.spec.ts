import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotSocialContainerComponent } from './spot-social-container.component';

describe('SpotSocialContainerComponent', () => {
  let component: SpotSocialContainerComponent;
  let fixture: ComponentFixture<SpotSocialContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotSocialContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotSocialContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
