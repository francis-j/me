import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './home/section/section.component';
import { TileComponent } from './home/tile/tile.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './home/tile/modal/modal.component';

import { AppService } from "./app.service";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SectionComponent,
        TileComponent,
        ModalComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        HttpModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent],
    entryComponents: [ModalComponent]
})
export class AppModule { }
