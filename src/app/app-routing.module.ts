import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeaderComponent } from './component/header/header.component';

const routes: Routes = [
{
path:'',
component:HomeComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path:'header',
  component:HeaderComponent
},
{ path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
