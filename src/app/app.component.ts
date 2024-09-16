import { Component } from '@angular/core';
import { DesktopLayoutComponent } from './layouts/desktop';
import { HeaderOnlyLayoutComponent } from './layouts/desktop/header-only-layout/header-only-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DesktopLayoutComponent, HeaderOnlyLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-hub-frontend';
}
