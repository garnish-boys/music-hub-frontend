import { Component } from '@angular/core';
import { SidenavOutletComponent } from '../../../features/nav/containers/sidenav-outlet/sidenav-outlet.component';
import { HeaderNavComponent } from '../../../features/nav/containers/header-nav/header-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  imports: [
    SidenavOutletComponent,
    HeaderNavComponent,
    RouterOutlet
  ],
  templateUrl: './desktop-layout.component.html',
  styleUrl: './desktop-layout.component.scss'
})
export class DesktopLayoutComponent {

}
