import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { CoolImageDirective } from './directives/cool-image.directive';
import { CrazyButtonComponent } from './components/crazy-button/crazy-button.component';
import { MyCommonModule } from './common.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HighlightDirective, MyCommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fun-without-modules';
}
