import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDrawerLayoutComponent } from './sidenav-drawer-layout.component';

describe('SidenavDrawerLayoutComponent', () => {
  let component: SidenavDrawerLayoutComponent;
  let fixture: ComponentFixture<SidenavDrawerLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavDrawerLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavDrawerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
