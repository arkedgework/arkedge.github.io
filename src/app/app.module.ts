import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedService } from './shared.service';
import { CreateSpacePipe } from './space.pipe.module';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CreateSpacePipe,
    SlickCarouselModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
