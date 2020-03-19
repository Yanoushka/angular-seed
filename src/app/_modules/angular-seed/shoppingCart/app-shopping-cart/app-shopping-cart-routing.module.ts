import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppinCartPageComponent } from './pages/shoppin-cart-page/shoppin-cart-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ShoppinCartPageComponent
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
export class AppShoppingCartRoutingModule {}
