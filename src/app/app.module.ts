import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MapHeaderComponent } from './components/map-header/map-header.component'
import { FormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SpotDetailPageComponent } from './components/spot-detail-page/spot-detail-page.component';
import { SpotInfoDesktopComponent } from './components/spotdetailpageComps/spot-info-desktop/spot-info-desktop.component';
import { SpotInfoMobileComponent } from './components/spotdetailpageComps/spot-info-mobile/spot-info-mobile.component';
import { SpotInfoHeaderComponent } from './components/spotdetailpageComps/spot-info-header/spot-info-header.component';
import { SpotSocialContainerComponent } from './components/spotdetailpageComps/spot-social-container/spot-social-container.component';
import { SpotSocialFormComponent } from './components/spotdetailpageComps/spot-social-form/spot-social-form.component';
import { SpotSocialCommentComponent } from './components/spotdetailpageComps/spot-social-comment/spot-social-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PopUpComponent,
    MapHeaderComponent,
    LoadingSpinnerComponent,
    SpotDetailPageComponent,
    SpotInfoDesktopComponent,
    SpotInfoMobileComponent,
    SpotInfoHeaderComponent,
    SpotSocialContainerComponent,
    SpotSocialFormComponent,
    SpotSocialCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
