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
import { RouterLink, RouterModule } from '@angular/router';
import { NavLinkComponent } from '../../components/nav-link/nav-link.component';

const routeConfig: NavItem[] = [
  {
    title: 'Start',
    icon: '',
    routerLink: 'start'
  },
  {
    title: 'About',
    icon: 'info',
    routerLink: 'about'
  },
]

const isActiveNavLink = (url: string, navItem: NavItem) => 
  (!!navItem.routerLink && !!url) ? url.includes(navItem.routerLink) : false;

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
    NavLinkComponent
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  @Input() showSidenavDrawerButton = false;
  @Input() showHeaderNavLinks = false;

  private readonly store = inject(Store);
  
  currentUrl$ = this.store.select(selectUrl);
  
  navItems$: Observable<NavItem[]> = this.currentUrl$.pipe(
    map((url: string) => {
      return routeConfig.map(route => ({
        ...route,
        isActive: isActiveNavLink(url, route)
      }))
    })
  );

  toggleSidenav() {
    this.store.dispatch(NavActions.toggleSidenav())
  }
}
