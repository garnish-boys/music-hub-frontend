import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavToggleService {
  private sidenav: MatSidenav;

  public setSidenav(sidenavViewChild: MatSidenav) { 
    this.sidenav = sidenavViewChild; 
  }
  
  public open() { 
    return this.sidenav && this.sidenav.open() 
  }

  public close() {
    return this.sidenav && this.sidenav.close();
  }

  public toggle(): void {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  constructor() { }
}
