import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Store } from '@ngrx/store';

import { NavActions } from '../../store/nav.actions';
import { routes } from '@app/app.routes';
import { NavItem } from '../../nav.model';
import { selectUrl } from '../../store/router.selectors';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavLinkComponent } from '../../shared/nav-link/nav-link.component';
import { AuthNavItemComponent } from '../auth-nav-item/auth-nav-item.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatListModule,
    AsyncPipe,
    RouterModule,
    NavLinkComponent,
    AuthNavItemComponent
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  @Input() showSidenavDrawerButton = false;
  @Input() navItems: NavItem[] = [];

  private readonly store = inject(Store);
  private readonly router = inject(Router);
  
  toggleSidenav() {
    this.store.dispatch(NavActions.toggleSidenav())
  }

  navToHub() {
    this.router.navigateByUrl('/hub');
  }
}
