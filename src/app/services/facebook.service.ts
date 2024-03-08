import { Injectable } from '@angular/core';

declare const FB: any;

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() {
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '856626232901409',
        cookie: true,
        xfbml: true,
        version: 'v12.0'
      });

      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, 
      fjs = d.getElementsByTagName(s)[0] as any;
      if (d.getElementById(id)) { return; }
      js = d.createElement(s) as any;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  shareWithFacebook(url: string) {
    FB.ui({
      display: 'popup',
      method: 'share',
      href: url,
    }, function (response: any) { });
  }
}
