import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCarComponent } from './shipping-car.component';

describe('ShippingCarComponent', () => {
  let component: ShippingCarComponent;
  let fixture: ComponentFixture<ShippingCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
