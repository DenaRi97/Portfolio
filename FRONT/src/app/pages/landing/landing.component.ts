import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from '../../components/about/about.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent,AboutComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
