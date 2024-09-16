import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderNavComponent } from '../../../features/nav/components/header-nav/header-nav.component';

@Component({
  selector: 'app-header-only-layout',
  standalone: true,
  imports: [HeaderNavComponent, RouterOutlet],
  templateUrl: './header-only-layout.component.html',
  styleUrl: './header-only-layout.component.scss'
})
export class HeaderOnlyLayoutComponent {

}
