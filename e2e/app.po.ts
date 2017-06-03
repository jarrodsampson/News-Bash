import { browser, element, by } from 'protractor';

export class NewsBashPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToSourcePage() {
    return browser.get('/source');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
