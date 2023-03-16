import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotSocialFormComponent } from './spot-social-form.component';

describe('SpotSocialFormComponent', () => {
  let component: SpotSocialFormComponent;
  let fixture: ComponentFixture<SpotSocialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotSocialFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotSocialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
