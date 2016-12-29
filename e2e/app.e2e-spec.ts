import { IzihubPage } from './app.po';

describe('izihub App', function() {
  let page: IzihubPage;

  beforeEach(() => {
    page = new IzihubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
