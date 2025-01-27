import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from "./components/ui/user-input/user-input.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {}
