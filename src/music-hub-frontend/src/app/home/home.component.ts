import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContentWrapperComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
