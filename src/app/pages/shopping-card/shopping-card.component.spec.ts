import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCardComponent } from './shopping-card.component';

<<<<<<< Updated upstream
describe('ShoppingCardComponent', () => {
=======
describe('ShippingCarComponent', () => {
>>>>>>> Stashed changes
  let component: ShoppingCardComponent;
  let fixture: ComponentFixture<ShoppingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
<<<<<<< Updated upstream
      imports: [ShoppingCardComponent]
    })
    .compileComponents();
    
=======
      declarations: [ShoppingCardComponent]
    })
    .compileComponents();

>>>>>>> Stashed changes
    fixture = TestBed.createComponent(ShoppingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
