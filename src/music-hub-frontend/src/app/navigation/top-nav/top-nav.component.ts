import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavToggleService } from '../shared/sidenav-toggle.service';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  constructor(private sidenavToggleService: SidenavToggleService) { }

  toggleSidenav(): void {
    this.sidenavToggleService.toggle();
  }
}
