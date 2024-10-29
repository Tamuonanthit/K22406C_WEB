import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionClientComponent } from './fashion-client.component';

describe('FashionClientComponent', () => {
  let component: FashionClientComponent;
  let fixture: ComponentFixture<FashionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
