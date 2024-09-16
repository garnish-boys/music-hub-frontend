import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';
import { NavActions } from '../../store/nav.actions';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  private readonly store = inject(Store);
  
  toggleSidenav() {
    this.store.dispatch(NavActions.toggleSidenav())
  }
}
