import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { PageContainerComponent } from './page-container/page-container.component'
import { HomeComponent } from './page-content/home/home.component'
import { MathematicsHomeComponent } from './page-content/mathematics/mathematics-home.component'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MathJaxModule } from "./mathjax/mathjax.module"
import { MathsTrigExercisesComponent } from './page-content/mathematics/maths-trig-exercises/maths-trig-exercises.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FaIcons, FaInjectionToken } from "./utilities/fa-icons"
import { CollapsableComponent } from './utilities/collapsable/collapsable.component'

@NgModule({
    declarations: [
        AppComponent,
        PageContainerComponent,
        HomeComponent,
        MathematicsHomeComponent,
        MathsTrigExercisesComponent,
        CollapsableComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        MathJaxModule,
        FontAwesomeModule,
    ],
    providers: [
        {
            provide: FaInjectionToken,
            useValue: new FaIcons()
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
