import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css',
})
export class InvestmentResultComponent {
  private readonly investmentService = inject(InvestmentService);
  results = computed(() => this.investmentService.resultData());
  // results = this.investmentService.resultData.asReadonly();
}
