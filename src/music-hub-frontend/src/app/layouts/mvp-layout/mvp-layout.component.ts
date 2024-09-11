import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LayoutContainerComponent } from "../../shared/containers/layout-container/layout-container.component";
import { HeaderNavComponent } from "../../features/nav/containers/header-nav/header-nav.component";
import { MainNavComponent } from "../../features/nav/containers/main-nav/main-nav.component";

@Component({
  selector: 'app-mvp-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderNavComponent, LayoutContainerComponent, LayoutContainerComponent, HeaderNavComponent, MainNavComponent, MainNavComponent],
  templateUrl: './mvp-layout.component.html',
  styleUrl: './mvp-layout.component.scss'
})
export class MvpLayoutComponent {
  
}
