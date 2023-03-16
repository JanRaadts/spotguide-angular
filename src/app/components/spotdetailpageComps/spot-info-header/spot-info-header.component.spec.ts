import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotInfoHeaderComponent } from './spot-info-header.component';

describe('SpotInfoHeaderComponent', () => {
  let component: SpotInfoHeaderComponent;
  let fixture: ComponentFixture<SpotInfoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotInfoHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotInfoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
