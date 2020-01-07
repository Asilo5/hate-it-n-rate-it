import { fetchUser, fetchRatings, addRatings, getMovies } from './apiCalls';

describe('apiCalls', () => {
  describe('fetchUser', () => {
    const mockEmail = 'mockJohnAdams@hotmail,com';
    const mockPassword = 'oneifbyland';
    const mockResponse = [
      {name: 'Lion King'},
      {name: 'Hook'}
    ]

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it('should call fetch with the correct params', async () => {
      await fetchUser(mockEmail, mockPassword);
      expect(window.fetch).toHaveBeenCalled();
    })

    it('should return the response if everything is okay', () => {
      expect(fetchUser(mockEmail, mockPassword)).resolves.toEqual(mockResponse);
    })

    it('should throw error if everything is not okay', async () => {
      const mockError = jest.fn().mockImplementation(() => {
        return Promise.resolve('Error fetching data')
      });

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false,
          json: mockError
        });
      });

      expect(fetchUser(mockEmail, mockPassword)).rejects.toEqual(Error('Error fetching data'))
    })

  });

  describe('fetchRatings', () => {
     let mockRatings;
     let userID = 5;

     beforeEach(() => {
       mockRatings = {
        ratings: [
          {
          id: 459,
          user_id: 5,
          movie_id: 7,
          rating: 4,
          created_at: "2020-01-06T23:54:39.125Z",
          updated_at: "2020-01-06T23:54:39.125Z"
          }
        ]
       };

       window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockRatings)
        })
    });

      it('should be passed the correct URL', () => {
        fetchRatings(userID);

        expect(window.fetch).toHaveBeenCalledWith(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${userID}/ratings`)
      })

      it('should return an array of ratings', () => {
        expect(fetchRatings(userID)).resolves.toEqual(mockRatings);
     });
 
     it('should return an error for response that is not ok', () => {
         window.fetch = jest.fn().mockImplementation(() => {
             return Promise.resolve({
                 ok: false,
             })
         });
         expect(fetchRatings(userID)).rejects.toEqual(Error('Error fetching ratings'))
       })
     })
  });

  describe('addRatings', () => {
    let mockMovieID = 459;
    let mockRating = 4;
    let mockUserID = 5;
    let addedRating;
    let mockOptions;
    let expected;

    beforeEach(() => {
      expected = [
        {
          id: 459,
          user_id: 5,
          movie_id: 7,
          rating: 4,
          created_at: "2020-01-06T23:54:39.125Z",
          updated_at: "2020-01-06T23:54:39.125Z"
          },
          {
          id: 462,
          user_id: 5,
          movie_id: 4,
          rating: 6,
          created_at: "2020-01-07T00:10:32.869Z",
          updated_at: "2020-01-07T00:10:32.869Z"
          }
    ];

      addedRating = {
        movie_id: mockMovieID, 
        rating: mockRating
      };

      mockOptions = {
        method: 'POST', 
        body: JSON.stringify(addedRating),
        headers: {
          'Content-Type': 'application/json'
        }
      };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(addedRating)
          })
       });
    })

    it('should be passed the correct url', () => {
      addRatings(addedRating);

      expect(window.fetch).toHaveBeenCalledWith(`https://rancid-tomatillos.herokuapp.com/api/v1/users/${mockUserID}/ratings`, mockOptions);
  })

  it('should return an array of ratings with new rating added', () => {
      expect(addRatings(addedRating)).resolves.toEqual(addedRating);
  })

  it('should return an error for response that is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
              ok: false,
          })
      });
      expect(addRatings(addedRating)).rejects.toEqual(Error('Idea not posted'))
  })
  });

  describe('getMovies', () => {
    
  })

});