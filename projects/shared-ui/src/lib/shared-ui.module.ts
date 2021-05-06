import { NgModule, ModuleWithProviders } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SuccessComponent } from './components/success/success.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {HeaderComponent} from './components/header/header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {A11yModule} from '@angular/cdk/a11y';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RouterModule,
        A11yModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        FlexLayoutModule,
        MatSelectModule
    ],
  declarations: [ConfirmComponent, ConfirmDialogComponent, ContactusComponent, FooterComponent, LoginComponent, LogoutComponent,
    SuccessComponent, PageNotFoundComponent, HeaderComponent],
  exports: [ConfirmComponent, ConfirmDialogComponent, ContactusComponent, FooterComponent, LoginComponent, LogoutComponent,
    SuccessComponent, PageNotFoundComponent, HeaderComponent]
})
export class SharedUiModule {
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: SharedUiModule,
      providers: [{provide: 'environment', useValue: environment}]
    };
  }
}
