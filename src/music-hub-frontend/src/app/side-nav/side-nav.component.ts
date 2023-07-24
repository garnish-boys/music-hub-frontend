import { Component, ViewChild, inject } from '@angular/core';
import { RouterOutlet, RouterModule, Router, Route, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { SidenavToggleService } from '../sidenav-toggle.service';





@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, RouterOutlet, MatButtonModule, MatIconModule, MatListModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  private sidenavToggleService = inject(SidenavToggleService);
  private router = inject(Router);
  
  public sidenavOpened: boolean = true;
  public routes: Route[];

  constructor() {
    this.routes = this.router.config.filter(route => !!route.title );
  }

  ngAfterViewInit() {
    if (this.sidenav) {
      this.sidenavToggleService.setSidenav(this.sidenav);
    }
  }

  tryIsActive(val: any): boolean {
    console.log(val);
    return true;
  }

}
