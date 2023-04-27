import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PicPageComponent } from './components/pages/pic-page/pic-page.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'search/:searchTerm', component:HomeComponent
  },
  {
    path:'pic/:id', component:PicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
