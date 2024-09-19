import { Component } from '@angular/core';
import { HeaderOnlyLayoutComponent } from '@app/layouts/header-only-layout/header-only-layout.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [
    HeaderOnlyLayoutComponent
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

}
