import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionClientDetailComponent } from './fashion-client-detail.component';

describe('FashionClientDetailComponent', () => {
  let component: FashionClientDetailComponent;
  let fixture: ComponentFixture<FashionClientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionClientDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionClientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
