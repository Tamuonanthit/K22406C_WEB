import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAdminComponent } from './fashion-admin.component';

describe('FashionAdminComponent', () => {
  let component: FashionAdminComponent;
  let fixture: ComponentFixture<FashionAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
