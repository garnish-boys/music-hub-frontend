import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { HeaderOnlyLayoutComponent } from '@app/shared/layout/header-only-layout/header-only-layout.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [
    HeaderOnlyLayoutComponent,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

}
