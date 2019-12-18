import React from 'react';
import { shallow } from 'enzyme';
import MoviesDisplay from './MoviesDisplay';

describe('MoviesDisplay', () => {
            let mockTitle = "Jumanji: The Next Level";
            let posterPath = "https://image.tmdb.org/t/p/original//l4iknLOenijaB85Zyb5SxH1gGz8.jpg"
            let backdropPath = "https://image.tmdb.org/t/p/original//zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg"
            let releaseDate = "2019-12-04"
            let mockOverview = "In Jumanji: The Next Level, the gang is back but the game has changed."


    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<MoviesDisplay id={1} 
                        title={mockTitle}
                        poster_path={posterPath}
                        backdrop_path={backdropPath}    
                        release_date={releaseDate}
                        overview={mockOverview}
                        average_rating={4}
                        />)
    })

    it('should match snapshot with all information passing in correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
    
})