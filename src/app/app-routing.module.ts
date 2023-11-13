import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'catalog/:id',
    loadChildren: () => import('./pages/catalog/catalog.module').then(m => m.CatalogPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'create-client',
    loadChildren: () => import('./pages/create-client/create-client.module').then(m => m.CreateClientPageModule)
  },
  {
    path: 'edit-client/:id',
    loadChildren: () => import('./pages/edit-client/edit-client.module').then(m => m.EditClientPageModule)
  },
  {
    path: 'another-images/:id',
    loadChildren: () => import('./pages/another-images/another-images.module').then(m => m.AnotherImagesPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./components/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'order-edit',
    loadChildren: () => import('./modals/order-edit/order-edit.module').then( m => m.OrderEditPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./modals/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'obs',
    loadChildren: () => import('./modals/obs/obs.module').then( m => m.ObsPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./modals/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'read-schedule',
    loadChildren: () => import('./modals/read-schedule/read-schedule.module').then( m => m.ReadSchedulePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
