import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary" class="mat-toolbar mat-toolbar-single-row">
      <span> 
        <img width="40" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==" />
      </span>
      <a href="#" class="gap tab-start tab-link">My Projects</a>
      <span class="filler"></span>
      <span>
          <a mat-icon-button [mat-menu-trigger-for]="menu" #menuTrigger="matMenuTrigger" (mouseover)="menuTrigger.openMenu()">
            <span>Hello Andrew</span>
          </a>
          <mat-menu #menu="matMenu" [overlapTrigger]="false">
            <span (mouseleave)="menuTrigger.closeMenu()">
              <button mat-menu-item class="tab-link">
                <span>My Profile</span>
              </button>
              <button mat-menu-item>
                <span>Profile Settings</span>
              </button>
            </span>
        </mat-menu>
      </span>
    </mat-toolbar>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
