describe('Movies App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Movies App');
  });
});
