import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { Events, MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { UserData } from 'src/providers/user-data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appNursePages = [
    {
      title: 'Home',
      url: '/nurse/home',
      icon: 'home'
    },
    {
      title: 'My Attendance',
      url: '/nurse/attendance',
      icon: 'list'
    },
    {
      title: 'My Schedule',
      url: '/nurse/schedule',
      icon: 'list'
    },
    {
      title: 'My Profile',
      url: '/nurse/profile',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'list'
    }
  ];

  public appFamilyPages = [
    {
      title: 'Home',
      url: '/family/home',
      icon: 'home'
    },
    {
      title: 'Attendance',
      url: '/family/attendance',
      icon: 'list'
    },
    {
      title: 'Report',
      url: '/family/report',
      icon: 'list'
    },
    {
      title: 'My Profile',
      url: '/family/profile',
      icon: 'list'
    },
    {
      title: 'Logout',
      url: '',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuController: MenuController,
    private storage: Storage,
    public events: Events,
    public userData: UserData,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.listenToLoginEvents();

    this.storage.get('user')
      .then((user) => {
        if(user) {
          if(user.permission == 'nurse') {
            this.handleMenu('nurse');
          } else {
            this.handleMenu('family');
          }
        } else {
          this.handleMenu('public');
        }
      });
  }

  handleMenu(menuName) {
    switch(menuName) {
      case 'public':
        this.menuController.enable(false, 'nurse');
        this.menuController.enable(false, 'family');
        break;
      case 'nurse':
        this.menuController.enable(true, 'nurse');
        this.menuController.enable(false, 'family');
        break;
      case 'family':
        this.menuController.enable(true, 'family');
        this.menuController.enable(false, 'nurse');
        break;
      default:
        this.menuController.enable(false, 'nurse');
        this.menuController.enable(false, 'family');
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.storage.get('user')
      .then((user) => {
        if(user) {
          if(user.permission == 'nurse') {
            this.handleMenu('nurse');
          } else {
            this.handleMenu('family');
          }
        } else {
          this.handleMenu('public');
        }
      });
    });

    this.events.subscribe('user:logout', () => {
      this.handleMenu('public');
    });
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/public/login');
  }
}
