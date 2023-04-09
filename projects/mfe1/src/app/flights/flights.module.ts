import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { ProgrammaticLoadingComponent } from '../exported/programmatic-loading.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES),
  ],
  declarations: [
    FlightsSearchComponent,
    ProgrammaticLoadingComponent
  ]
})
export class FlightsModule { }
