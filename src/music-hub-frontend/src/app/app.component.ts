import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { TopNavComponent } from './navigation/top-nav/top-nav.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet, TopNavComponent, SideNavComponent]
})
export class AppComponent {
  title = 'music-hub-frontend';
}
