import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubPageComponent } from './hub-page.component';

describe('HubPageComponent', () => {
  let component: HubPageComponent;
  let fixture: ComponentFixture<HubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HubPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
