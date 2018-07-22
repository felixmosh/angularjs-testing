import {MovieDetailsDriver} from './movie-details.driver';

describe('Component: movie-details', () => {
  let driver;
  let movie;

  beforeEach(() => {
    driver = new MovieDetailsDriver();

    driver.given.movie(movie = {title: 'terminator', year: '2018', overview: 'this is the movie description', poster_path: 'poster-path'})
      .when.created();
  });

  it('should render movie title', () => {
    expect(driver.get.title()).toBe(`${movie.title} ${movie.year}`);
  });

  it('should render movie description', () => {
    expect(driver.get.description()).toBe(movie.overview);
  });

  it('should render movie poster', () => {
    expect(driver.get.poster().attr('src')).toContain(movie.poster_path);
  });
});
