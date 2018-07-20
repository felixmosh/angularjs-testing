describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Angular App');
  });

  it('should have <header>', () => {
    expect(element(by.css('app header')).isPresent()).toEqual(true);
  });

  it('should have <main>', () => {
    expect(element(by.css('app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', () => {
    expect(element(by.css('.title')).getText()).toEqual('Hello from Angular !');
  });

  it('should have <footer>', () => {
    expect(element(by.css('app footer')).getText()).toEqual('Webpack Angular Starter');
  });

  it('should navigate to about page', () => {
    element(by.css('[data-hook="nav-about-link"]')).click();
    expect(element(by.css('[data-hook="about-title"]')).getText()).toEqual('About Works too!');
  });
});
