
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FeaturedComponent } from './components/featured-store/featured.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { MapLandingComponent } from './components/map-landing/map-landing.component';

import { FeaturedStoreService } from './services/featured-store.service';
import { AboutService } from './services/about.service';
import { InfoService } from './services/info.service';
import { SearchService } from './services/search.service';

import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingSpinnerComponent } from './components/shared/shared/loading-spinner/loading-spinner.component';
import { CanadaProgressChartComponent } from './components/canada-progress-chart/canada-progress-chart.component';
import { UserProgressChartComponent } from './components/user-progress-chart/user-progress-chart.component';
import { SearchSingleComponent } from './components/search-single/search-single.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    NewsletterComponent,
    FeaturedComponent,
    TrackerComponent,
    MapLandingComponent,
    ContactComponent,
    AboutComponent,
    InfoComponent,
    AuthComponent,
    DashboardComponent,
    SearchComponent,
    LoadingSpinnerComponent,
    CanadaProgressChartComponent,
    UserProgressChartComponent,
    SearchSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule
  ],
  providers: [FeaturedStoreService, InfoService, AboutService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
