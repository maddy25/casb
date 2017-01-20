import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';
import { MaterialModule }   from '@angular/material';
import { RouterModule }     from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Third Party Modules
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxChartsModule }    from '@swimlane/ngx-charts';
import { ClarityModule }      from 'clarity-angular';
import { ChartsModule }       from './vendor_modules/chartjs/chart.module';


// Compinents and Pages
import { AppComponent }       from './app.component';
import { PillComponent }      from './components/pill/pill.component';
import { BadgeComponent }     from './components/badge/badge.component';

import { HnavComponent }      from './components/hnav/hnav.component';
import { LogoComponent }      from './components/logo/logo.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

//Pages
import { HomeComponent }      from './home.component';
import { LoginComponent }     from './components/pages/login/login.component';
import { AlertsComponent }    from './components/pages/alerts/alerts.component';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { PolicyComponent    } from './components/pages/policy/policy.component';
import { IncidentsComponent } from './components/pages/incidents/incidents.component';
import { SettingsComponent  } from './components/pages/settings/settings.component';

import { SignupComponent }    from './components/pages/signup/signup.component';


// Services
import { AuthGuard       } from './routing_guards/auth.guard';
import { TranslateService} from './api/translate.service';
import { LoginService    } from './api/login.service';
import { IncidentService } from './api/incident.service';
import { PolicyService   } from './api/policy.service';


//Material2 depends on this module
import 'hammerjs';



@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    HttpModule,
    AppRoutingModule,

    // Thirdparty Module
    NgxDatatableModule,
    NgxChartsModule,
    ChartsModule,
    ClarityModule.forChild()

  ],

  declarations: [
    AppComponent,
    PillComponent,
    BadgeComponent,
    HnavComponent,
    AlertsComponent,
    HomeComponent,
    LogoComponent,
    AppFooterComponent,
    LoginComponent,
    SignupComponent,

    DashboardComponent,
    PolicyComponent,
    IncidentsComponent,
    SettingsComponent

  ],

  providers:[
    AuthGuard,
    TranslateService,
    LoginService,
    IncidentService,
    PolicyService,
    {provide: 'api', useValue: 'http://' + window.location.hostname + ':9119/' }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
