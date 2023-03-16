import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotSocialCommentComponent } from './spot-social-comment.component';

describe('SpotSocialCommentComponent', () => {
  let component: SpotSocialCommentComponent;
  let fixture: ComponentFixture<SpotSocialCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotSocialCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotSocialCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
