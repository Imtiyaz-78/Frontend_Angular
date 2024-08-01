import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ChildComponent } from '../child/child.component';
import { ParentComponent } from '../parent/parent.component';
import { LoginComponent } from '../app/user-authentication/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ChildComponent, 
    ParentComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app';
}
