import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpLayoutComponent } from './mvp-layout.component';

describe('MvpLayoutComponent', () => {
  let component: MvpLayoutComponent;
  let fixture: ComponentFixture<MvpLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvpLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvpLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
