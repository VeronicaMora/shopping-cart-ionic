import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProductPage } from './my-product';

@NgModule({
  declarations: [
    MyProductPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProductPage),
  ],
})
export class MyProductPageModule {}
