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
});
