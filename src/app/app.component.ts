import { Component } from '@angular/core';
import { HeaderOnlyLayoutComponent } from './layouts/desktop/header-only-layout/header-only-layout.component';
import { SidenavDrawerLayoutComponent } from './layouts/desktop/sidenav-drawer-layout/sidenav-drawer-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderOnlyLayoutComponent, SidenavDrawerLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-hub-frontend';
}
