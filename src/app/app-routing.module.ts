import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from "./page-content/home/home.component"
import { MathematicsHomeComponent } from "./page-content/mathematics/mathematics-home.component"
import { MathsTrigExercisesComponent } from "./page-content/mathematics/maths-trig-exercises/maths-trig-exercises.component"

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'mathematics',
        children: [
            {
                path: '',
                component: MathematicsHomeComponent,
            },
            {
                path: 'trigonometry',
                component: MathsTrigExercisesComponent,
            }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
