import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = $localize`:@@login-form-components--lock-timeout-sec:Account locked. Try again in ${this.pluralizeTimeout(4, $localize`:@@login-form-components--lock-timeout-sec-single:second`,$localize`:@@login-form-components--lock-timeout-sec-plural:seconds`)}:accountLockTimeoutSec:.`;

  pluralizeTimeout(timeout: number, single: string, plural: string): string {
    return timeout + ' ' + (timeout === 1 ? single : plural);
  }
}
