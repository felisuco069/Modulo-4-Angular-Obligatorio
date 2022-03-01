import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PrivateHeaderComponent } from './private-header/private-header.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ChooseHeaderComponent } from './choose-header/choose-header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RotateDirective } from './directives/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    HomeComponentComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent,
    HeaderPageComponent,
    FooterPageComponent,
    ChooseHeaderComponent,
    HighlightDirective,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
