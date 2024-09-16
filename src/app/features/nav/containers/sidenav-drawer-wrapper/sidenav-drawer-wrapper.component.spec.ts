import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDrawerWrapperComponent } from './sidenav-drawer-wrapper.component';

describe('SidenavDrawerWrapperComponent', () => {
  let component: SidenavDrawerWrapperComponent;
  let fixture: ComponentFixture<SidenavDrawerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavDrawerWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavDrawerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
