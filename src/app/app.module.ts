import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './template/homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { AdminpageComponent } from './template/adminpage/adminpage.component';
import { ListLoaispComponent } from './admin/Loaisp/list-loaisp/list-loaisp.component';
import { AddLoaispComponent } from './admin/Loaisp/add-loaisp/add-loaisp.component';
import { UpdateLoaispComponent } from './admin/Loaisp/update-loaisp/update-loaisp.component';
import { ListSanphamComponent } from './admin/Sanpham/list-sanpham/list-sanpham.component';
import { AddSanphamComponent } from './admin/Sanpham/add-sanpham/add-sanpham.component';
import { UpdateSanphamComponent } from './admin/Sanpham/update-sanpham/update-sanpham.component';
import { LoginComponent } from './login/login.component';
import { Homepage2Component } from './template/homepage2/homepage2.component';
import { SileComponent } from './template/sile/sile.component';
import { MenuComponent } from './template/menu/menu.component';
import { FooterComponent } from './template/footer/footer.component';
import { PeopleSayComponent } from './template/people-say/people-say.component';
import { MenuctComponent } from './template/menuct/menuct.component';
import { CtsanphamComponent } from './ctsanpham/ctsanpham.component';
import { SanphamdmComponent } from './sanphamdm/sanphamdm.component';
import { CartComponent } from './cart/cart.component';
import { TimkiemComponent } from './timkiem/timkiem.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { ListNhaccComponent } from './admin/Nhacc/list-nhacc/list-nhacc.component';
import { ThanhtoanComponent } from './thanhtoan/thanhtoan.component';
import { ListDonhangComponent } from './admin/Donhang/list-donhang/list-donhang.component';
import { CtdonhangComponent } from './admin/Donhang/ctdonhang/ctdonhang.component';
import { ThongkeComponent } from './admin/Thongke/thongke/thongke.component';
import { AddNccComponent } from './admin/Nhacc/add-ncc/add-ncc.component';
import { ListTintucComponent } from './admin/tintuc/list-tintuc/list-tintuc.component';
import { AddTintucComponent } from './admin/tintuc/add-tintuc/add-tintuc.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeComponent,
    AdminpageComponent,
    ListLoaispComponent,
    AddLoaispComponent,
    UpdateLoaispComponent,
    ListSanphamComponent,
    AddSanphamComponent,
    UpdateSanphamComponent,
    LoginComponent,
    Homepage2Component,
    SileComponent,
    MenuComponent,
    FooterComponent,
    PeopleSayComponent,
    MenuctComponent,
    CtsanphamComponent,
    SanphamdmComponent,
    CartComponent,
    TimkiemComponent,
    TintucComponent,
    ListNhaccComponent,
    ThanhtoanComponent,
    ListDonhangComponent,
    CtdonhangComponent,
    ThongkeComponent,
    AddNccComponent,
    ListTintucComponent,
    AddTintucComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CKEditorModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
