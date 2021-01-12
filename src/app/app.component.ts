import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openMenu() {
    this.menu.open('menu')
  }

  goToHome() {
    this.router.navigate(['home'])
    this.menu.close();
  }

  goToEpisode(){
    this.router.navigate(['episodes'])
    this.menu.close();
  }

  goToLocation(){
    this.router.navigate(['locations'])
    this.menu.close();
  }
  goToQuote(){
    this.router.navigate(['quote'])
    this.menu.close();
  }
}
