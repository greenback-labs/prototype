import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'accounts',
    loadChildren: 'app/account/account.module#AccountModule'
  },
  {
    path: 'categories',
    loadChildren: 'app/category/category.module#CategoryModule'
  },
  {
    path: 'persons',
    loadChildren: 'app/person/person.module#PersonModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
