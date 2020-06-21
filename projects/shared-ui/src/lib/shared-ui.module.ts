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

@NgModule({
  imports: [
    ReactiveFormsModule
  ],
  declarations: [ConfirmComponent,ConfirmDialogComponent,ContactusComponent,FooterComponent,LoginComponent,LogoutComponent,SuccessComponent,PageNotFoundComponent],
  exports: [ConfirmComponent,ConfirmDialogComponent,ContactusComponent,FooterComponent,LoginComponent,LogoutComponent,SuccessComponent,PageNotFoundComponent]
})
export class SharedUiModule { 
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: SharedUiModule,
      providers: [{provide: 'environment', useValue: environment}]
    };
  }
}
