import { ListDonhangComponent } from './admin/Donhang/list-donhang/list-donhang.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './template/homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './template/adminpage/adminpage.component';
import { ListLoaispComponent } from './admin/Loaisp/list-loaisp/list-loaisp.component';
import { AddLoaispComponent } from './admin/Loaisp/add-loaisp/add-loaisp.component';
import { UpdateLoaispComponent } from './admin/Loaisp/update-loaisp/update-loaisp.component';
import { ListSanphamComponent } from './admin/Sanpham/list-sanpham/list-sanpham.component';
import { AddSanphamComponent } from './admin/Sanpham/add-sanpham/add-sanpham.component';
import { UpdateSanphamComponent } from './admin/Sanpham/update-sanpham/update-sanpham.component';
import { Homepage2Component } from './template/homepage2/homepage2.component';
import { CtsanphamComponent } from './ctsanpham/ctsanpham.component';
import { SanphamdmComponent } from './sanphamdm/sanphamdm.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { TimkiemComponent } from './timkiem/timkiem.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ListNhaccComponent } from './admin/Nhacc/list-nhacc/list-nhacc.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { CtdonhangComponent } from './admin/Donhang/ctdonhang/ctdonhang.component';
import { ThongkeComponent } from './admin/Thongke/thongke/thongke.component';
import { ListTintucComponent } from './admin/tintuc/list-tintuc/list-tintuc.component';
import { AddTintucComponent } from './admin/tintuc/add-tintuc/add-tintuc.component';

const routes: Routes = [
  {
    path:"",
    component:HomepageComponent,
    children: [
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path: 'cart',
        component:CartComponent
      },
      {
        path: 'thanhtoan',
        component:ThanhtoanComponent
      }

    ],
  },
  {
    path:"Admin",
    component:AdminpageComponent,
    children: [
      {
        path: 'Loaisp',
        component:ListLoaispComponent
      },
      {
        path: 'ADDLoaisp',
        component:AddLoaispComponent
      },
      {
        path: 'updateLoaisp/:id',
        component:UpdateLoaispComponent
      },
      {
        path: 'sanpham',
        component:ListSanphamComponent
      },
      {
        path: 'add-sanpham',
        component:AddSanphamComponent
      },
      {
        path: 'update-sanpham/:id',
        component:UpdateSanphamComponent
      },
      {
        path: 'nhacc',
        component:ListNhaccComponent
      },
      {
        path: 'tintuc',
        component:ListTintucComponent
      },
      {
        path: 'add-tintuc',
        component:AddTintucComponent
      },
      {
        path: 'Donhang',
        component:ListDonhangComponent
      },
      {
        path: 'ctDonhang/:id',
        component:CtdonhangComponent
      },
      {
        path: 'thongke',
        component:ThongkeComponent
      }
    ],
  },
  {
    path:"",
    component:Homepage2Component,
    children: [
      {
        path: 'ctsanpham/:id',
        component:CtsanphamComponent
      },
      {
        path: 'sanpham/:id',
        component:SanphamdmComponent
      },
      {
        path: 'seach',
        component:TimkiemComponent
      },
      {
        path: 'new',
        component:TintucComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
