import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CoolService } from './cool/cool.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule, HttpClientModule],
  declarations: [AppComponent, LineChartComponent],
  bootstrap: [AppComponent],
  providers: [CoolService],
})
export class AppModule {}
