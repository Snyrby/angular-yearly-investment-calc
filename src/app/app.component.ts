import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from "./components/ui/user-input/user-input.component";
import { InvestmentResultComponent } from "./components/investment-result/investment-result.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {}
