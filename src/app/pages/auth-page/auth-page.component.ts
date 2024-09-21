import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink } from '@angular/router';
import { HeaderOnlyLayoutComponent } from '@app/shared/layout/header-only-layout/header-only-layout.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [HeaderOnlyLayoutComponent, MatButtonModule, RouterLink, MatDividerModule, MatCardModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export class AuthPageComponent {

}
