import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SupplierListPage } from './supplier-list';

@NgModule({
    declarations: [
        SupplierListPage,
    ],
    imports: [
        IonicPageModule.forChild(SupplierListPage),
    ],
    exports: [
        SupplierListPage
    ]
})
export class SupplierListPageModule {}