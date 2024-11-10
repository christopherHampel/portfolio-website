import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordsMarqueeComponent } from './marquee-description.component';

describe('KeywordsMarqueeComponent', () => {
  let component: KeywordsMarqueeComponent;
  let fixture: ComponentFixture<KeywordsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordsMarqueeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeywordsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
