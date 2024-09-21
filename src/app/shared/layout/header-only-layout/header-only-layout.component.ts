import { Component, Input, OnInit } from '@angular/core';
import { HeaderNavComponent } from '@features/nav';
import { RouterOutlet } from '@angular/router';
import { NavItem } from '@app/features/nav/nav.model';

@Component({
  selector: 'app-header-only-layout',
  standalone: true,
  imports: [HeaderNavComponent, RouterOutlet],
  templateUrl: './header-only-layout.component.html',
  styleUrl: './header-only-layout.component.scss'
})
export class HeaderOnlyLayoutComponent {
  @Input() navItems: NavItem[] = [];
}
