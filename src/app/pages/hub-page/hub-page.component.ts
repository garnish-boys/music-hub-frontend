import { Component } from '@angular/core';
import { SidenavDrawerLayoutComponent } from '@shared/layout/sidenav-drawer-layout/sidenav-drawer-layout.component';

@Component({
  selector: 'app-hub-page',
  standalone: true,
  imports: [SidenavDrawerLayoutComponent],
  templateUrl: './hub-page.component.html',
  styleUrl: './hub-page.component.scss'
})
export class HubPageComponent {

}
