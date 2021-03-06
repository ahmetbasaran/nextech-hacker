import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuRoutingService } from './services/menu-routing.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HackerNewsService } from './services/hackernews.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        NavbarComponent,
        SidebarComponent,
        FooterComponent
    ],
    exports: [
        NavbarComponent
    ],
    providers: [
        MenuRoutingService,
        HackerNewsService
    ]
})
export class CoreModule { }
