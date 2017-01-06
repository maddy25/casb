import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule}    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';

//Import Sub Modules in the app such as Routing Module
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from './vendor_modules/chartjs/chart.module';

// Compinents and Pages
import { AppComponent }     from './app.component';
import { PillComponent }    from './components/pill/pill.component';
import { HnavComponent }    from './components/hnav/hnav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LogoComponent }    from './components/logo/logo.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

//Pages
import { HomeComponent }      from './home.component';
import { LoginComponent }     from './components/pages/login/login.component';
import { AlertsComponent }    from './components/pages/alerts/alerts.component';

import { DashboardComponent }   from './components/pages/dashboard/dashboard.component';
import { PolicyComponent    }   from './components/pages/policy/policy.component';
import { IncidentsComponent }   from './components/pages/incidents/incidents.component';
import { SettingsComponent  }   from './components/pages/settings/settings.component';

import { SignupComponent }    from './components/pages/signup/signup.component';


// Services
import { LoginService } from './api/login.service';
import { AuthGuard } from './routing_guards/auth.guard';

//Material2 depends on this module
import 'hammerjs';



@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    HttpModule,
    AppRoutingModule,   // local module
    ChartsModule        // local module
  ],

  declarations: [
    AppComponent,
    PillComponent,
    HnavComponent,
    SidebarComponent,
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
    LoginService,
    {provide: 'api', useValue: 'http://' + window.location.hostname + ':9119/' }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
