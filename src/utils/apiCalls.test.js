import { fetchUser } from './apiCalls';

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
});