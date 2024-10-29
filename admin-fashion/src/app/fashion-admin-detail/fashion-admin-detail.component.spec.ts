import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAdminDetailComponent } from './fashion-admin-detail.component';

describe('FashionAdminDetailComponent', () => {
  let component: FashionAdminDetailComponent;
  let fixture: ComponentFixture<FashionAdminDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionAdminDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
