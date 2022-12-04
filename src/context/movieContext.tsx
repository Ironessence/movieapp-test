import { BottomSheetModal } from '@gorhom/bottom-sheet';
import React, { createContext, useContext, useRef, useState } from 'react';
import { PopularMovie } from '../utils/Models';

const MovieContext = createContext({});

const MovieProvider: React.FC = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState<PopularMovie>();
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie, bottomSheetRef }}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovies = () => {
  return useContext(MovieContext);
};

export { MovieProvider, useMovies };
