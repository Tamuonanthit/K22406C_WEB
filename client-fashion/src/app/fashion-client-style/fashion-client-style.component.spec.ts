import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionClientStyleComponent } from './fashion-client-style.component';

describe('FashionClientStyleComponent', () => {
  let component: FashionClientStyleComponent;
  let fixture: ComponentFixture<FashionClientStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionClientStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionClientStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
