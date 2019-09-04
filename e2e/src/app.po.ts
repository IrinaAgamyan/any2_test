import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getDemoFormMessage() {
    return element(by.css('app-root .demo-form-card .a2t-card-title')).getText() as Promise<string>;
  }
}
