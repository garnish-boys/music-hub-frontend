import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavContainerComponent } from './header-nav-container.component';

describe('HeaderNavContainerComponent', () => {
  let component: HeaderNavContainerComponent;
  let fixture: ComponentFixture<HeaderNavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderNavContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
