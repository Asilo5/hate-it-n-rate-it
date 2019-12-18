import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {
    const mockMovies = [
        {
            id: 1,
            title: "Jumanji: The Next Level",
            poster_path: "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
            release_date: "2019-12-04",
            overview: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game.",
            average_rating: 4
            },
    ];

    const wrapper;

    beforeEach(() => {
      wrapper = shallow(<MoviesContainer movies={mockMovies} />)
    })

    it('should match snapshot with all information passing in correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
    
})