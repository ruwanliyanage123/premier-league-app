import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { AdddataComponent } from './adddata/adddata.component';
import { FillteamComponent } from './fillteam/fillteam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstbatComponent } from './scorecard/firstbat/firstbat.component';
import { LastbatComponent } from './scorecard/lastbat/lastbat.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    ScorecardComponent,
    AdddataComponent,
    FillteamComponent,
    FirstbatComponent,
    LastbatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
