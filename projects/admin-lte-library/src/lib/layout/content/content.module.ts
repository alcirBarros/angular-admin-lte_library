import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule
    ],
    exports: [ContentComponent],
    declarations: [ContentComponent]
})
export class ContentModule {}
