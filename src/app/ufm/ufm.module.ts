import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UfmComponent } from './ufm.component';


@NgModule({
    declarations: [UfmComponent],
    exports: [UfmComponent],
    imports: [
        CommonModule
    ]
})
export class UfmModule {
}
