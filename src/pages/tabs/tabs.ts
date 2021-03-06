import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CartPage } from '../cart/cart';
import { ProfilePage } from '../profile/profile';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = SearchPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
