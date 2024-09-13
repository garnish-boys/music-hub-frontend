import { Component } from '@angular/core';
import { MvpLayoutComponent } from "./layouts/mvp-layout/mvp-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MvpLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'music-hub-frontend';
}
