import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GraphComponent } from './Components/graph/graph.component';
import { HomeComponent } from './Components/home/home.component';
import { UploadFileComponent } from './Components/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    HomeComponent,
    UploadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
