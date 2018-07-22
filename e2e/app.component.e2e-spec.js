function elementByDataHook(hook) {
  return $(`[data-hook="${hook}"]`);
}

function elementsByDataHook(hook) {
  return $$(`[data-hook="${hook}"]`);
}

function waitForElement(element, timeout = 1000, optionalMessage) {
  return browser.wait(function () {
    return element.isPresent().then(function (isPresent) {
      if (isPresent) {
        return element.isDisplayed();
      }
      else {
        return false;
      }
    });
  }, timeout, optionalMessage);
}

describe('Movies App', () => {

  beforeEach(() => {
    browser.get('/');
    waitForElement(elementByDataHook('movie-list-title'));
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Movies App');
  });

  it('should make a happy flow', () => {
    const secondMovie = elementsByDataHook('movie').get(1);
    secondMovie.$('[data-hook="title"]')
      .getText()
      .then(movieTitleInTheMainPage => {
        secondMovie.click();
        expect(elementByDataHook('title').getText()).toContain(movieTitleInTheMainPage);
      });
  });
});
