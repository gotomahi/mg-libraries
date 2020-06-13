import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: [],
  exports: []
})
export class SharedUiModule { 
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: SharedUiModule,
      providers: [{provide: 'environment', useValue: environment}]
    };
  }
}
