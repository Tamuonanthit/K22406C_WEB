import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAdminDeleteComponent } from './fashion-admin-delete.component';

describe('FashionAdminDeleteComponent', () => {
  let component: FashionAdminDeleteComponent;
  let fixture: ComponentFixture<FashionAdminDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionAdminDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionAdminDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
