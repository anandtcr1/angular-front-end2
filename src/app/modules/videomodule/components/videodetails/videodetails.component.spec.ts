import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodetailsComponent } from './videodetails.component';

describe('VideodetailsComponent', () => {
  let component: VideodetailsComponent;
  let fixture: ComponentFixture<VideodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideodetailsComponent]
    });
    fixture = TestBed.createComponent(VideodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
