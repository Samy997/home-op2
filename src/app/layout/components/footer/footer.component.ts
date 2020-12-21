import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  fbIcon = faFacebookF;
  twitterIcon = faTwitter;
  googlePlusIcon = faGooglePlusG;
  constructor() {}

  ngOnInit(): void {}
}
