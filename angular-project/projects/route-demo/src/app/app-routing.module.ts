import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { OneOfThreeComponent } from './three/one-of-three/one-of-three.component';
import { TwoOfThreeComponent } from './three/two-of-three/two-of-three.component';
import { TwoComponent } from './two/two.component';

const routes: Routes = [
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', children: [
    {path: 'one', component: OneOfThreeComponent},
    {path: 'two', component: TwoOfThreeComponent}
  ]},
  {path: '', redirectTo: '/one', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
