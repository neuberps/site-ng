import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceServicesComponent } from './service-services.component';

describe('ServiceServicesComponent', () => {
  let component: ServiceServicesComponent;
  let fixture: ComponentFixture<ServiceServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
