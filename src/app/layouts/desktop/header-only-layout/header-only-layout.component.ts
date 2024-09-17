import { Component } from '@angular/core';
import { HeaderNavComponent } from '@features/nav/containers/header-nav/header-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-only-layout',
  standalone: true,
  imports: [HeaderNavComponent, RouterOutlet],
  templateUrl: './header-only-layout.component.html',
  styleUrl: './header-only-layout.component.scss'
})
export class HeaderOnlyLayoutComponent {

}
