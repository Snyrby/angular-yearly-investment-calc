export type Investment = {
  expectedReturn: number;
  initialInvestment: number;
  annualInvestment: number;
  duration: number;
};

export type InvestmentData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}[];
