import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CartPage } from '../pages/cart/cart';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { OptionsPage } from '../pages/options/options';
import { UpdatePage } from '../pages/update/update';
import { MyProductPage } from '../pages/my-product/my-product';
import { CreatePage } from '../pages/create/create';
import { ProductPage } from '../pages/product/product';
import { SearchPage } from '../pages/search/search';
import { UserPage } from '../pages/user/user';
import { UserProductPage } from '../pages/user-product/user-product';
import { PetitionsProvider } from '../providers/petitions/petitions';
import { ProductsProvider } from '../providers/products/products';
import { ProfileProvider } from '../providers/profile/profile';
import { CartProvider } from '../providers/cart/cart';
import { CommentsProvider } from '../providers/comments/comments';
import { CameraProvider } from '../providers/camera/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CartPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    OptionsPage,
    UpdatePage,
    CreatePage,
    ProductPage,
    MyProductPage,
    SearchPage,
    UserPage,
    UserProductPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CartPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    OptionsPage,
    UpdatePage,
    CreatePage,
    ProductPage,
    MyProductPage,
    SearchPage,
    UserPage,
    UserProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PetitionsProvider,
    ProductsProvider,
    ProfileProvider,
    CartProvider,
    CommentsProvider,
    CameraProvider
  ]
})
export class AppModule {}
