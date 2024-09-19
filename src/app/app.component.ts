import { Component } from '@angular/core';
import { HeaderOnlyLayoutComponent } from './layouts/header-only-layout/header-only-layout.component';
import { SidenavDrawerLayoutComponent } from './layouts/sidenav-drawer-layout/sidenav-drawer-layout.component';
import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from './features/nav/containers/header-nav/header-nav.component';
import { SidenavOutletComponent } from './features/nav/containers/sidenav-outlet/sidenav-outlet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderOnlyLayoutComponent, 
    SidenavDrawerLayoutComponent, 
    RouterOutlet,
    HeaderNavComponent,
    SidenavOutletComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-hub-frontend';
}
