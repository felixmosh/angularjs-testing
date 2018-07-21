import {MoviesServiceDriver} from './movies.srv.driver';

describe('Movies Service', () => {
  let driver;
  let movieList;

  beforeEach(() => {
    driver = new MoviesServiceDriver();
    driver
      .given.movieList(movieList = [{title: 'terminator', id: 1000}])
      .when.created();
  });

  it('should fetch movie info by movie name', () => {
    let movieInfo;
    driver.service.getMovieByName(movieList[0].title)
      .then((_movieInfo) => movieInfo = _movieInfo);
    driver.when.flush();

    expect(movieInfo).toEqual(movieList);
  });
});
