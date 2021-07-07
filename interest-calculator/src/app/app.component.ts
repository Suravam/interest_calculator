import { Component } from '@angular/core';

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
  value = 0;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  vertical = false;
  tickInterval = 10;
  int_rate = 0;
  principal = 0;
  result = 0;
}