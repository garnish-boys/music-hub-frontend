import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { HeaderOnlyLayoutComponent } from '@app/shared/layout/header-only-layout/header-only-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [HeaderOnlyLayoutComponent, MatButtonModule, RouterLink, MatDividerModule, MatCardModule, MatTabsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {

}
