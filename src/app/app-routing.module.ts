import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./page-content/home/home.component"
import { MathematicsHomeComponent } from "./page-content/mathematics/mathematics-home.component"

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'mathematics',
        component: MathematicsHomeComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
