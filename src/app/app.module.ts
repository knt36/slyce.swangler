import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SwaggerService } from './services/swagger.service';

import { AuthComponent } from './components/authComponent/authComponent.controller';
import { LocalStorageService } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';



import {SampleViewComponent} from './views/sample/sample.controller';
import {AppRoutingModule} from './app-routing.module';

import { CollapsableNavComponent } from './components/collapsable-nav/collapsable-nav.component';

import { ContactComponent } from './components/contact/contact.component';
import { HttpResModalComponent } from './components/httpResModalComponent/httpResModal.controller';
import { ParamConsoleComponent } from './components/param-console/param-console.component';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import {MainViewComponent} from './views/main/main.component';
import { ExampleCollapsibleComponent } from './components/example-collapsible/example-collapsible.component';
import { EndpointComponent } from './components/endpoint/endpoint.component';
import {ExampleSideBarComponent} from './components/example-side-bar/example-side-bar.component';
import {EndpointsViewComponent} from './views/endpoints-view/endpoints-view.component';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ContactComponent,
    AuthComponent,
    SampleViewComponent,
    HttpResModalComponent,
    AppComponent,
    CollapsableNavComponent,
    SidebarNavComponent,
    ExampleCollapsibleComponent,
    ParamConsoleComponent,
    SidebarNavComponent,
    CollapsableNavComponent,
    ExampleSideBarComponent,
    MainViewComponent,
    EndpointComponent,
    EndpointsViewComponent
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [SwaggerService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
