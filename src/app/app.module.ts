import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsTableComponent } from './pages/results-table/results-table.component';
import { DropCeroPipe } from './pipes/drop-cero.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResultsTableComponent,
    DropCeroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
