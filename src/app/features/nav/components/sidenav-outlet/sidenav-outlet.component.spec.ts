import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavOutletComponent } from './sidenav-outlet.component';

describe('SidenavOutletComponent', () => {
  let component: SidenavOutletComponent;
  let fixture: ComponentFixture<SidenavOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
