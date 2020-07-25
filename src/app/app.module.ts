import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DataShareService, SharedUiModule} from 'shared-ui';
import {Route, Router, RouterModule} from '@angular/router';
import { HeaderTestComponent } from './header-test/header-test.component';

const routes: Route[] = [{path: 'home', component: AppComponent},
  {path: 'product', component: AppComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HeaderTestComponent
  ],
    imports: [
        BrowserModule,
        SharedUiModule,
      RouterModule.forRoot(routes)
    ],
  providers: [DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
