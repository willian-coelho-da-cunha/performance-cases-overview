import ptLocale from '@angular/common/locales/pt';

import { LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptLocale, 'pt');

@NgModule({ })
export class LocaleConfigModule {

  public static forRoot(): ModuleWithProviders<LocaleConfigModule> {
    return {
      ngModule: LocaleConfigModule,
      providers: [
        { provide: LOCALE_ID, useValue: 'pt' }
      ]
    };
  }
}
