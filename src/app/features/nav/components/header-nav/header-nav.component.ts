import { Component } from '@angular/core';
import { HeaderNavContainerComponent } from '../../containers/header-nav-container/header-nav-container.component';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [HeaderNavContainerComponent],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {

}
