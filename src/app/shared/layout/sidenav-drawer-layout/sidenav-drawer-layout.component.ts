import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from '@features/nav';
import { SidenavOutletComponent } from '@features/nav';
import { NavItem } from '@app/features/nav/nav.model';

@Component({
  selector: 'app-sidenav-drawer-layout',
  standalone: true,
  imports: [HeaderNavComponent, SidenavOutletComponent, RouterOutlet],
  templateUrl: './sidenav-drawer-layout.component.html',
  styleUrl: './sidenav-drawer-layout.component.scss'
})
export class SidenavDrawerLayoutComponent implements OnInit {
  @Input() headerNavItems: NavItem[] = [];
  @Input() sidenavItems: NavItem[] = [];

  showHeaderNavLinks = false;

  ngOnInit(): void {
      this.showHeaderNavLinks = this.headerNavItems.length > 0;
  }
}
