import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageContainerComponent } from './page-container/page-container.component';
import { HomeComponent } from './page-content/home/home.component';
import { MathematicsHomeComponent } from './page-content/mathematics/mathematics-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageContainerComponent,
    HomeComponent,
    MathematicsHomeComponent
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
