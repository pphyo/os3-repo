import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInterpolateComponent } from './text-interpolate/text-interpolate.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { PropertyComponent } from './one-way/property/property.component';
import { AttributeComponent } from './one-way/attribute/attribute.component';
import { EventComponent } from './one-way/event/event.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextInterpolateComponent,
    OneWayComponent,
    TwoWayComponent,
    PropertyComponent,
    AttributeComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
