import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav'; 
import { HeaderNavComponent } from "../../features/nav/containers/header-nav/header-nav.component";
import { selectSidenavOpen } from '../../features/nav/store/nav.reducer';
import { Store } from '@ngrx/store';
import { NavActions } from '../../features/nav/store/nav.actions';
import { AsyncPipe } from '@angular/common';
import { SidenavOutletComponent } from '../../features/nav/containers/sidenav-outlet/sidenav-outlet.component';

@Component({
  selector: 'app-mvp-layout',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderNavComponent,
    MatSidenavModule,
    AsyncPipe,
    SidenavOutletComponent
  ],
  templateUrl: './mvp-layout.component.html',
  styleUrl: './mvp-layout.component.scss'
})
export class MvpLayoutComponent {
  private readonly store = inject(Store);

  sidenavOpen = this.store.selectSignal(selectSidenavOpen);
  
  toggleSidenav(): void {
    this.store.dispatch(NavActions.toggleSidenav())
  }
}
