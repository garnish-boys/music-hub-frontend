import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { selectSidenavOpen } from '../../store/nav.reducer';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav-outlet',
  standalone: true,
  imports: [MatSidenavModule, RouterModule, MatListModule],
  templateUrl: './sidenav-outlet.component.html',
  styleUrl: './sidenav-outlet.component.scss'
})
export class SidenavOutletComponent {
  private readonly store = inject(Store);

  sidenavOpen = this.store.selectSignal(selectSidenavOpen);
}