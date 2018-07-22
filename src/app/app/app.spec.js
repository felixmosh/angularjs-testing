import 'angular-mocks';

describe('app', () => {
  let component;
  let googleAnalytics;
  beforeEach(angular.mock.module('app', {
    googleAnalytics: {
      trackLoad: jasmine.createSpy('trackLoad')
    }
  }));

  beforeEach(angular.mock.inject(($compile, $rootScope, $httpBackend, _googleAnalytics_) => {
    $httpBackend.whenGET(/.*/).respond([]);
    const scope = $rootScope.$new();
    component = $compile(`<app></app>`)(scope);
    scope.$apply();
    googleAnalytics = _googleAnalytics_;
  }));

  it('should send google analytics', () => {
    expect(googleAnalytics.trackLoad).toHaveBeenCalledWith('app-loaded');
  });
});
