import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, {
  createContext,
  PropsWithChildren,
  RefObject,
  useContext,
  useRef,
  useState,
} from 'react';
import { Movie } from '../utils/Models';

interface MovieContextData {
  selectedMovie?: Movie;
  setSelectedMovie: (movie: Movie) => void;
  bottomSheetRef: RefObject<BottomSheetModalMethods>;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

const MovieProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
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
