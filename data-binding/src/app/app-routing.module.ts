import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeComponent } from './one-way/attribute/attribute.component';
import { EventComponent } from './one-way/event/event.component';
import { OneWayComponent } from './one-way/one-way.component';
import { PropertyComponent } from './one-way/property/property.component';
import { TextInterpolateComponent } from './text-interpolate/text-interpolate.component';
import { TwoWayComponent } from './two-way/two-way.component';

const routes: Routes = [
  {path: 'text', component: TextInterpolateComponent},
  {path: 'one', component: OneWayComponent, children: [
    {path: 'property', component: PropertyComponent},
    {path: 'attribute', component: AttributeComponent},
    {path: 'event', component: EventComponent},
    {path: '', redirectTo: 'property', pathMatch: 'full'}
  ]},
  {path: 'two', component: TwoWayComponent},
  {path: '', redirectTo: 'text', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
