import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleaguesReviewsComponent } from './colleagues-reviews.component';

describe('ColleaguesReviewsComponent', () => {
  let component: ColleaguesReviewsComponent;
  let fixture: ComponentFixture<ColleaguesReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleaguesReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColleaguesReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
