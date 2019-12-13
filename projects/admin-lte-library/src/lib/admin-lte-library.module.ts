import { SidebarLeftModule } from './layout/sidebar-left/sidebar-left.module';
import { ContentModule } from './layout/content/content.module';
import { WrapperModule } from './layout/wrapper/wrapper.module';
import { NgModule } from '@angular/core';
import { AdminLteLibraryComponent } from './admin-lte-library.component';
import { HeaderModule } from './layout/header/header.module';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [AdminLteLibraryComponent, ButtonComponent],
  imports: [
    
  ],
  exports: [
    AdminLteLibraryComponent, 
    WrapperModule,
    ContentModule,
    HeaderModule,
    SidebarLeftModule
  ]
})
export class AdminLteLibraryModule { }
