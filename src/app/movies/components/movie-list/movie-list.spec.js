import {MovieListDriver} from './movie-list.driver';

describe('Component: movie-list', () => {
  let driver,
    movie;

  beforeEach(() => {
    driver = new MovieListDriver();

    driver.given.movie(movie = {id: 1, title: 'terminator', year: '2018'})
      .when.created();
  });

  it('should render a list of movies', () => {
    expect(driver.get.list().length).toEqual(1);
  });

  it('should render the given movie', () => {
    const childDriver = driver.get.movieItemDriver(0);
    expect(childDriver.get.title()).toEqual(movie.title);
  });

  it('should filter the movie list', () => {
    driver.when.filter('none exist movie');
    expect(driver.get.list().length).toBe(0);
    driver.when.filter(movie.title);
    expect(driver.get.list().length).toBe(1);
  });
});
