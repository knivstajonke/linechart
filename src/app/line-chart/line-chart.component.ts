import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { CoolService } from '../cool/cool.service';
import { CoolItem } from '../cool/cool-item';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styles: [''],
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: '2022-10-05, öre/kWh' },
  ];

  public lineChartLabels: Label[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private coolService: CoolService) {}

  ngOnInit() {
    this.coolService.getData().subscribe({
      next: (spotPrices) => {
        console.log(spotPrices);
        // spotPrices.forEach((ci) => {
        //   this.lineChartData[0].data.push(ci.Value);
        //   this.lineChartLabels.push(ci.TimeStampHour);
        // });
      },
      error: (err) => console.log(err),
    });
  }
}
