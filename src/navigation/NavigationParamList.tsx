import { ScreenRoutes } from '../utils/ScreenRoutes';

export type NavigationParamList = {
  //MAIN
  [ScreenRoutes.Main]: undefined;
  [ScreenRoutes.Home]: undefined;

  //FAVORITES
  [ScreenRoutes.Favorites]: undefined;

  //ACCOUNT
  [ScreenRoutes.Account]: undefined;

  //SETTINGS
  [ScreenRoutes.Settings]: undefined;

  //HOME
  [ScreenRoutes.Popular]: undefined;
  [ScreenRoutes.Upcoming]: undefined;
};
