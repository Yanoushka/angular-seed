import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECartPageComponent } from './pages/e-cart-page/e-cart-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ECartPageComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppECartRoutingModule {}
