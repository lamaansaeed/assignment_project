import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{LightgalleryModule} from 'lightgallery/angular'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { PicPageComponent } from './components/pages/pic-page/pic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    PicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
