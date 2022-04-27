import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ShowItemComponent } from './item/show-item/show-item.component';
import { AddEditItemComponent } from './item/add-edit-item/add-edit-item.component';
import{SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { ShowItemComponent } from './item/show-item/show-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    //ShowItemComponent,
    AddEditItemComponent,
    ShowItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
