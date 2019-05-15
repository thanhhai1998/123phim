import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { QuanlynguoidungComponent } from './layout-admin/quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './layout-admin/quanlyphim/quanlyphim.component';
import { QuanlylichchieuComponent } from './layout-admin/quanlylichchieu/quanlylichchieu.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    LayoutAdminComponent,
    QuanlynguoidungComponent,
    QuanlyphimComponent,
    QuanlylichchieuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    LayoutAdminComponent,
    QuanlynguoidungComponent,
    QuanlyphimComponent,
    QuanlylichchieuComponent
  ]
})
export class AdminModule { }
