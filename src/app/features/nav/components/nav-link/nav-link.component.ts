import { Component, inject, Input, OnInit } from '@angular/core';
import { NavItem, NavLinkType } from '../../nav.model';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { selectUrl, selectIsNavItemActive } from '../../store/router.selectors';
import { MatListModule } from '@angular/material/list';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule, MatListModule, AsyncPipe],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss'
})
export class NavLinkComponent implements OnInit {
  @Input({ required: true }) navItem?: NavItem;
  @Input() navLinkType: NavLinkType = 'header';

  private readonly store = inject(Store);
  isActive = this.store.selectSignal(selectIsNavItemActive(`/${this.navItem?.routerLink}`));

  ngOnInit(): void {
      
  }
}
