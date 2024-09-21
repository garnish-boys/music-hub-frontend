import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthNavItemComponent } from './auth-nav-item.component';

describe('AuthNavItemComponent', () => {
  let component: AuthNavItemComponent;
  let fixture: ComponentFixture<AuthNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthNavItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
