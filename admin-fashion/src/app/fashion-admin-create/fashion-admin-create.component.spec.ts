import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionAdminCreateComponent } from './fashion-admin-create.component';

describe('FashionAdminCreateComponent', () => {
  let component: FashionAdminCreateComponent;
  let fixture: ComponentFixture<FashionAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionAdminCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
