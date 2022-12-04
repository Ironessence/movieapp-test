import { LinkingOptions } from '@react-navigation/native';
import { ScreenRoutes } from '../utils/ScreenRoutes';
import { HomeStackPathConfig } from './HomeStackNavigator';

export const LinkingConfig: LinkingOptions = {
  prefixes: ['movieapp://'],
  config: {
    screens: {
      [ScreenRoutes.Main]: {
        path: '',
        screens: {
          [ScreenRoutes.HomeStack]: HomeStackPathConfig,
          [ScreenRoutes.Favorites]: ScreenRoutes.Favorites,
          [ScreenRoutes.Search]: ScreenRoutes.Search,
          [ScreenRoutes.Account]: ScreenRoutes.Account,
          [ScreenRoutes.Settings]: ScreenRoutes.Settings,
        },
      },
      [ScreenRoutes.Home]: {
        path: '',
        screens: {
          [ScreenRoutes.Popular]: ScreenRoutes.Popular,
          [ScreenRoutes.Upcoming]: ScreenRoutes.Upcoming,
          [ScreenRoutes.MovieDetails]: ScreenRoutes.MovieDetails,
        },
      },
    },
  },
};
