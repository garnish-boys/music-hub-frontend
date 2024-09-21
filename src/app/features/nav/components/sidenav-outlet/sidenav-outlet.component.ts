import { Component, inject, Input, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { selectSidenavOpen } from '../../store/nav.reducer';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { getRouterSelectors } from '@ngrx/router-store';
import { AsyncPipe } from '@angular/common';
import { NavLinkComponent } from '../../shared/nav-link/nav-link.component';
import { NavItem } from '../../nav.model';

const { selectUrl } = getRouterSelectors();

@Component({
  selector: 'app-sidenav-outlet',
  standalone: true,
  imports: [MatSidenavModule, RouterModule, MatListModule, AsyncPipe, NavLinkComponent],
  templateUrl: './sidenav-outlet.component.html',
  styleUrl: './sidenav-outlet.component.scss'
})
export class SidenavOutletComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  private readonly store = inject(Store);
  private route = inject(ActivatedRoute);

  sidenavOpen = this.store.selectSignal(selectSidenavOpen);
  currentUrl$ = this.store.select(selectUrl);
  private routeDebug: any;

  ngOnInit(): void {
    this.currentUrl$.subscribe((url) => this.routeDebug = url);
    
  }

}