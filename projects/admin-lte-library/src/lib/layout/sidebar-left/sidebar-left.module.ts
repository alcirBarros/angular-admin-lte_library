import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarLeftComponent } from './sidebar-left.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [SidebarLeftComponent],
    exports: [SidebarLeftComponent]
})
export class SidebarLeftModule {}
