import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviexBoxComponent } from './reviex-box.component';

describe('ReviexBoxComponent', () => {
  let component: ReviexBoxComponent;
  let fixture: ComponentFixture<ReviexBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviexBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
