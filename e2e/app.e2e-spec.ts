import { SmartPlugDashboardPage } from './app.po';

describe('smart-plug-dashboard App', () => {
  let page: SmartPlugDashboardPage;

  beforeEach(() => {
    page = new SmartPlugDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
