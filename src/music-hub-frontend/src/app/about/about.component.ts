import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContentWrapperComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
