import { NewsBashPage } from './app.po';

describe('news-bash App', () => {
  let page: NewsBashPage;

  beforeEach(() => {
    page = new NewsBashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
