import 'angular-mocks';
import {CommonModule} from './index';

describe('toUpperCase filter', () => {
  it('should convert given test to upper case', () => {
    const text = 'text with lower case';
    angular.mock.module(CommonModule);

    let filter;
    angular.mock.inject(($filter) => {
      filter = $filter('toUpperCase');
    });

    expect(filter(text)).toBe(text.toUpperCase());
  });
});
