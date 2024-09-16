import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavFixedLayoutComponent } from './sidenav-fixed-layout.component';

describe('SidenavFixedLayoutComponent', () => {
  let component: SidenavFixedLayoutComponent;
  let fixture: ComponentFixture<SidenavFixedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavFixedLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavFixedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
