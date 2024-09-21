import { Component } from '@angular/core';
import { NavLinkComponent } from '../../shared/nav-link/nav-link.component';
import { NavItem } from '../../nav.model';

@Component({
  selector: 'app-auth-nav-item',
  standalone: true,
  imports: [NavLinkComponent],
  templateUrl: './auth-nav-item.component.html',
  styleUrl: './auth-nav-item.component.scss'
})
export class AuthNavItemComponent {
  authNavItem: NavItem = {
    title: 'Register/Login',
    routerLink: '/auth'
  }
}
