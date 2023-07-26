import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-content-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent {
  
  @Input() pageTitle: string | undefined = '';
  
}
