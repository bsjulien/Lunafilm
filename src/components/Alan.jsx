import React, { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

import { selectGenreOrCategory, searchMovie } from '../features/currentGenreOrCategory';

import { fetchToken } from '../utils';

import { ColorModeContext } from '../utils/ToggleColorMode';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: '79df0a9a04ff9d1c372f661df26cccec2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, genreOrCategory, query, movie }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === genreOrCategory.toLowerCase());

          if (foundGenre) {
            history.push('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            // because there is space in top rated, causes confusion
            const category = genreOrCategory.startsWith('top') ? 'top_rated' : genreOrCategory;
            history.push('/');
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          //   window.location.href = '/';
          history.push('/');
        } else if (command === 'search') {
          dispatch(searchMovie(query));
        } else if (command === 'movie') {
          history.push(`/${movie}`);
        }
      },
    });
  }, []);
};

export default useAlan;
