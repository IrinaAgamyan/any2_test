import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { OtherPagesComponent } from './pages/other-pages/other-pages.component';


const routes: Routes = [
  {
    path: '',
    component: DemoPageComponent
  },
  {
    path: 'legal-notice',
    component: OtherPagesComponent
  },
  {
    path: 'terms-and-conditions',
    component: OtherPagesComponent
  },
  {
    path: 'imprint',
    component: OtherPagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
