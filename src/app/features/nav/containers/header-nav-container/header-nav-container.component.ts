import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header-nav-container',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './header-nav-container.component.html',
  styleUrl: './header-nav-container.component.scss'
})
export class HeaderNavContainerComponent {

}
