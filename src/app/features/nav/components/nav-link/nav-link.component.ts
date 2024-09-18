import { Component, Input, OnInit } from '@angular/core';
import { NavItem, NavLinkType } from '../../nav.model';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss'
})
export class NavLinkComponent implements OnInit {
  @Input({ required: true }) navItem?: NavItem;
  @Input() navLinkType: NavLinkType = 'header';

  ngOnInit(): void {
      
  }
}
