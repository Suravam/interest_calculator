import { Component } from '@angular/core';

export interface PeriodicReturns {
  year: number;
  position: number;
  inflation: string;
  interest: string;
  real_rate: number;
  real_return: string;
}

@Component({
  selector: 'calculator-app',
  templateUrl: './app.outer_tabs.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interest-calculator';
}

@Component({
  selector: 'comp-calc',
  templateUrl: './app.compound_interest.html',
  styleUrls: ['./app.component.css']
})
export class CompCalc {
  title = 'interest-calculator';
  n_years = 15;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 1;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  vertical = false;
  tickInterval = 10;
  int_rate = 7;
  principal = 1000;
  result = 0;
  inflation_years = [2005,	2006,	2007,	2008,	2009,	2010,	2011,	2012,	2013,	2014,	2015,	2016,	2017,	2018,	2019,	2020]
  inflation_rates = [4.24634362,	5.796523376,	6.372881356,	8.349267049,	10.88235294,	11.98938992,	8.858360966,	9.312445605,	11.06367478,	6.649500151,	4.906973441,	4.948216341,	3.328173375,	3.945068664,	3.723276483,	6.623436776 ]
  displayedColumns: string[] = ['position', 'year', 'inflation','interest', 'real_rate', 'real_return'];
  dataSource: PeriodicReturns[] = this.prepare_datasource();

  prepare_datasource() : any {
    let l_dataSource: PeriodicReturns[] = [];
    let l_principle: number = this.principal;
    for (var i = 0; i < this.inflation_years.length; i++ ) {
      l_principle = this.calculate_real_return_amount(l_principle, this.inflation_rates[i], i+1);
      let l_real_rate = this.calculate_real_rate_of_return(this.inflation_rates[i])
      let item: PeriodicReturns = {position: i+1, year: this.inflation_years[i], inflation: this.inflation_rates[i].toFixed(2), interest: this.int_rate.toFixed(2), real_rate: +l_real_rate.toFixed(2), real_return: l_principle.toFixed(2)};
      console.log(l_principle)
      l_dataSource.push(item);
    }
    return l_dataSource;
  }

  calculate() : string | '0'{
    return (this.principal * ((1 + this.int_rate/100) ** this.n_years)).toFixed(2)
  }

  calculate_real_rate_of_return(inflation : number) : number | 0 {
    return (((1 + (this.int_rate / 100)) / (1 + (inflation / 100))) - 1) * 100
  }
  calculate_real_return_amount(new_principle : number, inflation : number, years : number) : number | 0 {
    let real_rate = this.calculate_real_rate_of_return(inflation)
    return (new_principle * ((1 + real_rate/100) ** 1))
  }  
}