import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAdminUpdateComponent } from './fashion-admin-update.component';

describe('FashionAdminUpdateComponent', () => {
  let component: FashionAdminUpdateComponent;
  let fixture: ComponentFixture<FashionAdminUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionAdminUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionAdminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
