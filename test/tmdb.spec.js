describe('tmdb API wrapper test', function() {
  var API_KEY = '1234165123511512341234';

  it('should be defined', function() {
    expect(tmdb).toBeDefined();
  });

  it('should init with the api key of tmdb', function() {
    expect(typeof tmdb.init).toBe('function');
  });

  describe('test private methods', function() {
    beforeEach(function() {
      tmdb.init({
        apikey: API_KEY,
        debug: true
      });
    });

    it('_getUrl', function() {
      var method = 'something/anotherthing';
      var params = {
        hello: 'world',
        awe: 'some'
      }
      var pair1 = 'api_key='+API_KEY;
      var pair2 = 'hello=world';
      var pair3 = 'awe=some';
      var url = tmdb._getUrl(method, params)

      expect(url.split('?')[0]).toContain('http://api.themoviedb.org/3/'+method);
      expect(url.split('?')[1]).toContain(pair1);
      expect(url.split('?')[1]).toContain(pair2);
      expect(url.split('?')[1]).toContain(pair3);
    });
  });

  describe('api calls', function() {
    var request;
    var onSuccess, onFailure;

    jasmine.Ajax.install();

    beforeEach(function() {

      tmdb.init({
        apikey: API_KEY,
        debug: true
      });

    });

    it('getConfiguration', function() {
      tmdb.getConfiguration();
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/configuration?api_key='+API_KEY);
    });

    it('getMoviesUpcoming', function() {
      tmdb.getMoviesUpcoming();
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/upcoming?api_key='+API_KEY);
    });

    it('getMoviesNowPlaying', function() {
      tmdb.getMoviesNowPlaying();
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/now_playing?api_key='+API_KEY);
    });

    it('getMovieLatest', function() {
      tmdb.getMovieLatest();
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/latest?api_key='+API_KEY);
    });

    it('getMoviesTopRated', function() {
      tmdb.getMoviesTopRated();
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/top_rated?api_key='+API_KEY);
    });

    it('getMoviesPopular', function() {
      tmdb.getMoviesPopular(onFailure, onSuccess);
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/popular?api_key='+API_KEY);
    });

    it('getMovie', function() {
      tmdb.getMovie(51234);
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/51234?api_key='+API_KEY);
    });

    it('getMoviesSimilarTo', function() {
      tmdb.getMoviesSimilarTo(51234);
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/51234/similar?api_key='+API_KEY);
    });

    it('getMovieReviews', function() {
      tmdb.getMovieReviews(51234);
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/51234/reviews?api_key='+API_KEY);
    });

    it('getMovieRating', function() {
      tmdb.getMovieRating(51234);
      request = jasmine.Ajax.requests.mostRecent();

      expect(request.method).toBe('GET');
      expect(request.url).toBe('http://api.themoviedb.org/3/movie/51234/rating?api_key='+API_KEY);
    });

  });

});