import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBurgerMenuComponent } from './nav-burger-menu.component';

describe('NavBurgerMenuComponent', () => {
  let component: NavBurgerMenuComponent;
  let fixture: ComponentFixture<NavBurgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBurgerMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBurgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
