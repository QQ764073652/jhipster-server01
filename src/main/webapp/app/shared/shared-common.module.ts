import { NgModule } from '@angular/core';

import { JhipsterServer01SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterServer01SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterServer01SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterServer01SharedCommonModule {}
