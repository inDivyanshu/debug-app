import { Component, OnInit } from "@angular/core";
import { LottieSplashScreen } from "@ionic-native/lottie-splash-screen/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(public lottie: LottieSplashScreen) {}
  ngOnInit() {
    let timer = setTimeout(() => {
      this.lottie.hide();
      clearTimeout(timer);
    },1200);
  }
}
